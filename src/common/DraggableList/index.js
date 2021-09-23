import React, { Component } from "react";
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getDraggableItems = list =>
  Array.from({ length: list.length }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: list[k]
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "white" : "white",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "white" : "white",
  width: '100%'
});

class DraggableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getDraggableItems(this.props.list)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      items: getDraggableItems(nextProps.list)
    })
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {React.cloneElement(this.props.renderItem,{ customProps: { id: item.content, onDeleteItem: this.props.onDeleteItem } })}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

DraggableList.propTypes = {
  list: PropTypes.array,
}

export default DraggableList