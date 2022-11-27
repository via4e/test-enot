export interface todoElement {
    done: boolean,
    header: string,    
    text: string,
}

export interface todoList {
    list: {}[];
}

export interface AppContent {
    settingsVisible: boolean,
    runningVisible: boolean,
    settingsToggle: (boolean) => boolean,
    runningToggle: (boolean) => boolean,
}