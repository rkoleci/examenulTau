import React from 'react'
import { useTranslation } from 'react-i18next'

import { menuList, exerciseErrors } from './constants'

export const  useTranslatedStrings = (name) => {
    const { t } = useTranslation()

    if (name == 'menuList') {
        return menuList.map(i => {
            return t(`menu.${i}`)
        })
    }

    if (name == 'exerciseErrors') {
        return exerciseErrors.map((i, x) => {
            return t(`error_dialog.option${x+1}`)
        })
    }

    return []
}

