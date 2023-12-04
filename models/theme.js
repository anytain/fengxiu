import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationH = 't-4';
    static locationS = 't-sleeve';
    themes = []

    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH},${Theme.locationS}`
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
                names: names
            }
        })
    }

     getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA)
    }

     getHomeLocationE() {
        return this.themes.find(t => t.name === Theme.locationE)
    }
     getHomeLocationF() {
        return this.themes.find(t => t.name === Theme.locationF)
    }
    getHomeLocationH() {
        return this.themes.find(t => t.name === Theme.locationH)
    }

    getHomeLocationS() {
        return this.themes.find(t => t.name === Theme.locationS)
    }

    static  getHomeLocationnESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    static  getThemeSpuByName(name) {
        return  Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }
}

export {
    Theme
}
