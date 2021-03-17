const { browser } = require('webdriverio')

class ProductPage {

    private _url: string = 'http://automationpractice.com';
    public get fld_search() {return browser.element('#<search_query_top>')}
    public get info_found_count() {return browser.element('product_count')}
    public get alert_warning() {return browser.element('alert alert-warning')}
    public get search_grid() {return browser.element('#product_list grid row')}
    public get found_product() {return browser.element('a.product_name')}
    public get product_name_title() {return browser.element('<h1 itemprop="name">')}

    public openHomePage(): void {
        open(this._url);
    }

    public productSearch(productName): any {
        this.fld_search.setValue(productName + "\uE006")
    }

    public confirmSearchHasResults(): any {
        let regex = /\d/g;
        let fldValue = this.info_found_count.getValue();
        return regex.test(fldValue);
    }

    public clickFoundProduct(): any {
        this.search_grid().found_product().click()
    }

}

export {ProductPage}