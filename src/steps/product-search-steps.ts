import { Given, When, Then } from "cucumber";
import { ProductPage } from '../page-objects/productPage';
import { expect } from "chai";
const po = new ProductPage();


Given('the catalog page has loaded', (): void => {
    po.openHomePage();
});

Given('found products are listed', (): void => {
    expect(po.confirmSearchHasResults()).to.be.true("No products listed")
    po.openHomePage();
});

Given('I am on the product details page', (): void => {
    expect(po.product_name_title()).to.exist("Not on a product page")
});

When('I search for a product with the name {string}', (searchTerm): void => {
    po.productSearch(searchTerm)
});

When('I click on a product', (): void => {
    po.clickFoundProduct()
});

When('I click on a product detail modification', (searchTerm): void => {
    //Click on a color change button
    po.fld_search.setValue(searchTerm)
});

When('I click on the Add to Cart button', (searchTerm): void => {
    //Click on the add to cart button
    po.fld_search.setValue(searchTerm)
});

Then('found products are listed', (): void => {
    expect(po.confirmSearchHasResults()).to.be.true("No products listed")
});

Then('I am on the product details page', (): void => {
    expect(po.product_name_title()).to.exist("Not on a product page")
});

Then('The product picture updates', (): void => {
    //Will need to check image before and then verify it has changed
    expect(po.alert_warning()).to.not.exist('product not found');
});

Then('I am notified that the product has been added to my cart', (): void => {
    //Pop up notification
    expect(po.alert_warning()).to.not.exist('product not found');
});

