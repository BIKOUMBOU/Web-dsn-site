export enum SiteActionsTypes{
    GET_ALL_SITES = "[Site] Get all sites",
    SEARCH_SITES = "[Site] Search sites",
}

export interface ActionEvent { // Déclaration d'une interface ActionEvent
    type: SiteActionsTypes,
    payload: any //paramètre et type de l'évenement
}

export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T>{
    dataState:DataStateEnum,
    data?:T,
    errorMessage?: string
    
}