export const appName = 'ExamenalTau'

export const apiKey = ''

export const menuList = ['Home', 'Classes', 'Exams', 'Matter', 'Memorator', 'Your opinion']

export const filters = [
    { title: 'By Chapter', type: 'chapter', filters: ['Fractions', 'Measurement and measurements', 'Point, line, plane, half-plane, half-line, segment, angle', 'Important lines in the triangle and their competition', 'Triangle', 'Real numbers'] },
    { title: 'By Classes', type: 'classes', filters: ['5th grade', '6th grade', '7th grade', 'The 8th grade'] },
    { title: 'By Difficulty', type: 'difficulty', filters: ['Easy', 'Medium', 'Hard', 'Very hard'] },
]

export const examItems = {
    items: Array.from(Array(100).keys()).map(i => {
        return {
            "id": "Mat05C01P01I01" + Math.random(),
            "enabled": true,
            "iteractionType": "choice",
            "curriculum": "MAT",
            "grade": 5,
            "chapter": 5,
            "notion": "NOT14C13",
            "difficulty": 1,
            "body": {
                "content": "<p>Avem $A=\\left\\{ 1,3,4,5 \\right\\}$ şi $B=\\left\\{ 0,1,2,3,6 \\right\\}$.</p>",
                "interaction": {
                    "responseIdentifier": "RESPONSE",
                    "shuffle": true,
                    "minChoices": 1,
                    "maxChoices": 1,
                    "type": "formula"
                }
            }
        }
    }),
    "total_count": 100,
    "size": 10,
    "start_index": 0
}