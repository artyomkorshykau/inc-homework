const initState = {
    themeId: 1,
}

type InitialStateType = typeof initState

type ActionType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' : {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) as const
