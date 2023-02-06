module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: { 
    computerEl: {
      selector: '/html/body/div[6]/div[2]/ul[1]/li[1]/a',
      locateStrategy: 'xpath',
    },
    desktopsEl: 'div.listbox > ul > li.active.last > ul > li:nth-child(1) > a',
    ownComputerEl: {
      selector: '//a[@href="/build-your-own-computer"]',
      locateStrategy: 'xpath',
    },
    processorEl: '#product_attribute_input_1',
    processorOptionEl: '#product_attribute_1 > option[value="2"]',
    ramEl: '#product_attribute_input_2',
    ramOptionEl: '#product_attribute_2 > option[value="5"]',
    HDDEl: '#product_attribute_3_7',
    OSEl: '#product_attribute_4_9'
  },
  commands: {
    clickComputer() {
      return this
      .click("@computerEl")
    },
    clickDesktops() {
      return this
      .click("@desktopsEl")
    },
   clickOwnComputer() {
    return this
    .click("@ownComputerEl")
   },
   clickProcessor() {
    return this
    .click("@processorEl")
    .click("@processorOptionEl")
   },
   clickRam() {
    return this
    .click("@ramEl")
    .click("@ramOptionEl")
   },
   clickHDD() {
    return this
    .click("@HDDEl")
   },
   clickOS() {
    return this
    .click("@OSEl")
   }
  },
};
