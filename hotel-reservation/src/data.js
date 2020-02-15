import uuid from "uuid/v1";
import room1 from "./images/room-1.jpg";
import room2 from "./images/room-2.jpg";
import room3 from "./images/room-3.jpg";
import room4 from "./images/room-4.jpg";
import room5 from "./images/room-5.jpg";
import room6 from "./images/room-6.jpg";
import room7 from "./images/room-7.jpg";
import room8 from "./images/room-8.jpg";
import room9 from "./images/room-9.jpg";
import room10 from "./images/room-10.jpg";
import room11 from "./images/room-11.jpg";
import room12 from "./images/room-12.jpg";

import rooms1 from "./images/room-details-1.jpg";
import rooms2 from "./images/room-details-2.jpg";
import rooms3 from "./images/room-details-3.jpg";
import rooms4 from "./images/room-details-4.jpg";

export default [{
        features: {
            id: uuid()
        },
        fields: {
            name: "single economy",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "single basic",
            slug: "single-basic",
            type: "single",
            price: 150,
            size: 250,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "single standard",
            slug: "single-standard",
            type: "single",
            price: 250,
            size: 300,
            capacity: 1,
            pets: true,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "single deluxe",
            slug: "single-deluxe",
            type: "single",
            price: 300,
            size: 400,
            capacity: 1,
            pets: true,
            breakfast: true,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "double economy",
            slug: "double-economy",
            type: "double",
            price: 200,
            size: 300,
            capacity: 2,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "double basic",
            slug: "double-basic",
            type: "double",
            price: 250,
            size: 350,
            capacity: 2,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room6
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "double standard",
            slug: "double-standard",
            type: "double",
            price: 300,
            size: 400,
            capacity: 2,
            pets: true,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room7
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "double deluxe",
            slug: "double-deluxe",
            type: "double",
            price: 400,
            size: 500,
            capacity: 2,
            pets: true,
            breakfast: true,
            featured: true,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room8
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "family economy",
            slug: "family-economy",
            type: "family",
            price: 300,
            size: 500,
            capacity: 3,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room9
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "family basic",
            slug: "family-basic",
            type: "family",
            price: 350,
            size: 550,
            capacity: 4,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room10
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "family standard",
            slug: "family-standard",
            type: "family",
            price: 400,
            size: 600,
            capacity: 5,
            pets: true,
            breakfast: false,
            featured: false,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room11
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "family deluxe",
            slug: "family-deluxe",
            type: "family",
            price: 500,
            size: 700,
            capacity: 6,
            pets: true,
            breakfast: true,
            featured: true,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: room12
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    },
    {
        features: {
            id: uuid()
        },
        fields: {
            name: "presidential",
            slug: "presidential-room",
            type: "presidential",
            price: 600,
            size: 1000,
            capacity: 10,
            pets: true,
            breakfast: true,
            featured: true,
            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [{
                    fields: {
                        file: {
                            url: rooms1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: rooms4
                        }
                    }
                }
            ]
        }
    }
];