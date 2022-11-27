export interface todoElement {
    done: boolean,
    header: string,    
    text: string,
}

export interface todoList {
    list: {}[];
}

export interface AppContent {
    settingsVisible: boolean
}