import { uuid } from '@/helpers/utils.js';

export default {
    name: 'Workshop',
    columns: [
        {
            name: "Todo",
            tasks: [
                {
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                    name: "First task",
                    id: uuid(),
                    userAssigned: null,
                    creator: null,
                    timeTracking: null,
                    priority: null,
                    status: null,
                    epic: {
                        name: "Marketing",
                        color: '#41b883'
                    },
                    comments: [
                        "Old education him departure any arranging one prevailed. Their end whole might began her. Behaved the comfort another fifteen eat.",
                        "Partiality had his themselves ask pianoforte increasing discovered",
                        "So mr delay at since place whole above miles. He to observe conduct at detract because.",
                        "Way ham unwilling not breakfast furniture explained perpetual. Or mr surrounded conviction so astonished literature.",
                        "Songs to an blush woman be sorry young. We certain as removal attempt.",
                    ],
                },
                {
                    description: "ed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
                    name: "Second task",
                    id: uuid(),
                    userAssigned: null,
                    creator: null,
                    timeTracking: null,
                    priority: null,
                    status: null,
                    epic: {
                        name: "Marketing",
                        color: '#41b883'
                    },
                    comments: []
                },
                {
                    description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
                    name: "This is third task",
                    id: uuid(),
                    userAssigned: null,
                    creator: null,
                    timeTracking: null,
                    priority: null,
                    status: null,
                    epic: {
                        name: "Mobile development",
                        color: '#654982',
                    },
                    comments: [],
                },

            ],
        },
        {
            name: "In-progress",
            tasks: [
                {
                    description: "no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
                    name: "Some task in progress",
                    id: uuid(),
                    userAssigned: null,
                    creator: null,
                    timeTracking: null,
                    priority: null,
                    status: null,
                    epic: {
                        name: "Marketing",
                        color: '#41b883'
                    },
                    comments: [
                        "Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression.",
                        "Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel."
                    ],
                },
                {
                    description: "",
                    name: "Another task in progress",
                    id: uuid(),
                    userAssigned: null,
                    creator: null,
                    timeTracking: null,
                    priority: null,
                    status: null,
                    epic: {
                        name: "Large Team Support",
                        color: '#3572A5'
                    },
                    comments: ["e attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued."],
                }
            ],
        },
        {
            name: "Done",
            tasks: [
                {
                    description: "",
                    name: "Website builder from scruch",
                    id: uuid(),
                    userAssigned: null,
                    creator: null,
                    timeTracking: null,
                    priority: null,
                    status: null,
                    epic: {
                        name: "Local Office",
                        color: '#a53b70'
                    },
                    comments: [
                        "Cottage out enabled was entered greatly prevent message. No procured unlocked an likewise. Dear but what she been over gay felt body.",
                    ],
                },
            ],
        },
    ],
}