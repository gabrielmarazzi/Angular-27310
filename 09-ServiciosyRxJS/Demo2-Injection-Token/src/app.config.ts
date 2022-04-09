import { InjectionToken } from "@angular/core"

export interface API {
    url: string;
}

export const APIConfig: API = {
    url: "http://localhost:3000"
}

export const CONFIG = new InjectionToken<API>("ApiConfig");