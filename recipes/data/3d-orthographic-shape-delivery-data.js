var orthographic_shapes = {
    title: "Orthographic Shapes JSON-delivery format",
    description: "Structure containing all details related to the project, submission and answers.",
    steps: [
        {
            id: "orthographic-a-t-description",
            displayName: "Description",
            description:
                "The JSON format presented here represents the delivery structure used by the Sama platform for annotation delivery.\
                 It contains all the necessary details regarding how annotations are delivered through our platform.",
        },
        {
            id: "orthographic-a-t-task",
            displayName: "Task",
            subsections: [
                {
                    id: "task-id",
                    displayName: "Id",
                    description:
                        'Corresponds to a unique identifier that addresses a specific task.',
                    code: `{
    ...
    "id": "646b7ff84948945cc0a03fff",
    ...
}`,
                },
                {
                    id: "task-project-id",
                    displayName: "Project id",
                    description:
                        'A unique identifier that specifies which project this submission belongs to.',
                    code: `{
    ...
    "project_id": 20329,
    ...   
}`,
                },
                {
                    id: "task-created-at",
                    displayName: "Created at",
                    description:
                        'Tells when the task was created',
                    code: `{
    ...
    "created_at": "2023-05-22T14:47:07.871Z",
    ...   
}`,
                },
                {
                    id: "task-delivered-at",
                    displayName: "Delivered at",
                    description:
                        'This attribute is utilized to capture the date on which a task was delivered. As the delivery process is manually initiated,\
                     the attribute\'s default value remains null until the delivery is set.',
                    code: `{
    ...
    "delivered_at": 2023-05-22T15:50:16.781Z,
    ...   
}`,
                },
                {
                    id: "task-state",
                    displayName: "State",
                    description:
                        'Indicates the state of the task: new, in progress, completed, delivered, rejected, approved, acknowledged \
                        Please see https://sama.helpjuice.com/result-management/viewing-the-status-of-tasks-new?from_search=120517225 for more details ',
                    code: `{
    ...
    "state": "delivered",
    ...   
}`,
                },
            ],
        },
        {
            id: "orthographic-a-t-data",
            displayName: "Data",
            subsections: [
                {
                    id: "data-input-metadata",
                    displayName: "Input Metadata",
                    description:
                        'The input metadata contains calibation values or urls, location urls, videos sources, total frames, important data about the scene.',
                    code: `{
                        ...
                        "data": {
                            "sensor-location": "https://assets.samasource.org/...",
                            "right_camera Camera initial rotation": "[0,0,0]",
                            "left_camera Camera initial rotation": "[0,0,0]",
                            "center_camera Camera initial rotation": "[0,0,0]"
                        },
                        ...
                    }`,
                },
            ],
        },
        {
            id: "orthographic-a-t-answer",
            displayName: "Answers",
            description:
                'The "answers" element stores the workspace output and the shape outputs\
                 as a dictionary of key-value pairs.',
            code: `{
    "answers": {
        "Scene": [
            {
                "shapes": []
            },
            {
                "shapes": []
            }
        ]
    }
}`,
        },
        {
            id: "orthographic-a-t-scene",
            displayName: "Scene",
            description:
                'The scene outputs refer to the overall attributes of a given scene,\
                    this includes the annotated shapes and frame counts',
            code: `{
    "Scene": [
        {
            "shapes": []
        },
        {
            "shapes": []
        }
    ]
}`,
        },
        {
            id: "orthographic-a-t-shapes",
            displayName: "Shapes",
            description: "",
            subsections: [
                {
                    id: "shape-tags",
                    displayName: "Tags",
                    description:
                        "Tags are attributes used to describe a shape.",
                    code: `{
    ...
        "tags": {
        "object_class": "road_edge"
    }
    ...
}`,
                },
                {
                    id: "shape-type-line",
                    displayName: "Type Line",
                    description:
                        "A line consists of a collection of points, and this list can contain any number of points.\
                         It allows for the representation of line segments or paths with multiple vertices, accommodating the flexibility to include as many points as needed to define the shape accurately.",

                    code: `{
                        ...
                        "type": "line",
                        ...

                    }`,
                },
                {
                    id: "shape-index",
                    displayName: "Index",
                    description:
                        "The index corresponds to a unique shape identifier, this is a sequential number.",
                    code: `{
    ...
    "index": 0,
    ...
}`,

                },

            ]
        },
        {
            id: "orthographic-a-t-key-location",
            displayName: "Key Locations",
            description: "A key location denotes a shape within a frame that has undergone an edit, such as updates to the tag or readjustments made to the shape.\
            It serves as an indicator for significant modifications or changes made to the annotated shape within a specific frame.",
            subsections: [
                {
                    id: "key-location-points",
                    displayName: "Points",
                    description:
                        "List of ordered pairs that correspond to the edited shape, capturing the specific modifications made during the editing process",
                    code: `{
"points": [
        [
            -5.07703,
            8.20888,
            0
        ],
        [
            -2.51703,
            8.20888,
            0
        ],
        [
            1.56297,
            8.16888,
            0
        ],
        [
            4.84297,
            8.16888,
            0
        ],
        [
            8.76297,
            8.16888,
            0
        ],
        [
            11.72297,
            8.24888,
            0
        ],
        [
            17.64297,
            8.32888,
            0
        ],
        [
            24.16297,
            8.40888,
            0
        ],
        [
            31.52297,
            8.56888,
            0
        ],
        [
            36.20297,
            8.72888,
            0
        ],
        [
            39.08297,
            8.92888,
            0S
        ],
        [
            40.24297,
            9.00888,
            0
        ],
        [
            41.40297,
            9.28888,
            0
        ],
        [
            42.12297,
            9.72888,
            0
        ],
        [
            42.80297,
            10.32888,
            0
        ],
        [
            43.56297,
            11.48888,
            0
        ],
        [
            43.72297,
            12.00888,
            0
        ],
        [
            43.76297,
            12.60888,
            0
        ],
        [
            43.68297,
            13.24888,
            0
        ],
        [
            43.48297,
            14.52888,
            0
        ],
        [
            43.04297,
            16.64888,
            0
        ],
        [
            42.48297,
            19.40888,
            0
        ],
        [
            41.60297,
            23.68888,
            0
        ],
        [
            41.24297,
            25.48888,
            0
        ],
        [
            41.12297,
            26.20888,
            0
        ]
    ]
}`,
                },
                {
                    id: "key-location-source",
                    displayName: "Source",
                    description:
                        "The presence of the source ID indicates whether the annotation corresponds to a pre-annotation. If the annotation is derived from a pre-annotation, the source ID will have the value 'pre_annotation.'\
                        However, if the annotation is not a pre-annotation, the JSON will not include a source input field for that annotation.",
                    code: `{
    "source": {
        "source_id": "pre_annotation"
    },
}`,

                },
                {
                    id: "key-location-visibility",
                    displayName: "Visibility",
                    description:
                        "Visibility denotes whether the shape is visible or not in that frame.\
                        An element can be present in one frame but then in the next frame it can not\
                        This is a boolean value",
                    code: `{
    "visibility": 1,

}`,
                },
                {
                    id: "key-location-frame-number",
                    displayName: "Frame number",
                    description:
                        "Frames are structured in a sequential list, and each frame is assigned a unique index that acts as an identifier.\
                        This frame index establishes a linkage between annotations and their respective frames",
                    code: `{
    "frame_number": 0,

}`,
                }
            ]
        },
        {
            id: "orthographic-a-t-is-orthographic",
            displayName: "Is orthographic",
            description: "The presence of the orthograp indicates whether the annotation corresponds to a pre-annotation. If the annotation is derived from a pre-annotation, the source ID will have the value 'pre_annotation.'\
            However, if the annotation is not a pre-annotation, the JSON will not include a source input field for that annotation.",
            code: `{
    "is_orthographic": true,
}`

        },
        {
            id: "orthographic-a-t-locations",
            displayName: "Locations",
            description: "Locations represent the frames that exist between two key frames,\
            and these frames are derived through interpolation. In instances where the shape is not visible within a frame,\
            the visibility value will be set to 0, and there won't be a points array associated with it",
            code: `{
"locations": {
        "visibility": 1,
        "points": [
            [
                -5.07703,
                8.20888,
                0
            ],
            [
                -2.51703,
                8.20888,
                0
            ],
            [
                1.56297,
                8.16888,
                0
            ],
            [
                4.84297,
                8.16888,
                0
            ],
            [
                8.76297,
                8.16888,
                0
            ],
            [
                11.72297,
                8.24888,
                0
            ],
            [
                17.64297,
                8.32888,
                0
            ],
            [
                24.16297,
                8.40888,
                0
            ],
            [
                31.52297,
                8.56888,
                0
            ],
            [
                36.20297,
                8.72888,
                0
            ],
            [
                39.08297,
                8.92888,
                0
            ],
            [
                40.24297,
                9.00888,
                0
            ],
            [
                41.40297,
                9.28888,
                0
            ],
            [
                42.12297,
                9.72888,
                0
            ],
            [
                42.80297,
                10.32888,
                0
            ],
            [
                43.56297,
                11.48888,
                0
            ],
            [
                43.72297,
                12.00888,
                0
            ],
            [
                43.76297,
                12.60888,
                0
            ],
            [
                43.68297,
                13.24888,
                0
            ],
            [
                43.48297,
                14.52888,
                0
            ],
            [
                43.04297,
                16.64888,
                0
            ],
            [
                42.48297,
                19.40888,
                0
            ],
            [
                41.60297,
                23.68888,
                0
            ],
            [
                41.24297,
                25.48888,
                0
            ],
            [
                41.12297,
                26.20888,
                0
            ]
        ]
    }
}`

        },

        {
            id: "orthographic-a-t-group-type",
            displayName: "Group Type",
            description:
                "Group type is defined in the project settings",
            code: `{
    "group_type": null,
}`
        },
        {
            id: "orthographic-a-t-frame-count",
            displayName: "Frame Count",
            description:
                "Total number o annotated frames",
            code: `{
    "frame_count": 200
}`
        },
    ],
    fullJson: `[
        {
            "id": "646b7ff84948945cc0a03fff",
            "project_id": 20329,
            "created_at": "2023-05-22T14:47:07.871Z",
            "delivered_at": "2023-05-22T15:50:16.781Z",
            "state": "delivered",
            "data": {
                "sensor-location": "https://assets.samasource.org/...",
                "right_camera Camera initial rotation": "[0,0,0]",
                "left_camera Camera initial rotation": "[0,0,0]",
                "center_camera Camera initial rotation": "[0,0,0]"
            },
            "answers": {
                "Scene": [
                    {
                        "shapes": [
                            {
                                "tags": {
                                    "object_class": "vehicle"
                                },
                                "type": "line",
                                "index": 0,
                                "key_locations": [
                                    {
                                        "points": [
                                            [
                                                -5.07703,
                                                8.20888,
                                                0
                                            ],
                                            [
                                                -2.51703,
                                                8.20888,
                                                0
                                            ],
                                            [
                                                1.56297,
                                                8.16888,
                                                0
                                            ],
                                            [
                                                4.84297,
                                                8.16888,
                                                0
                                            ],
                                            [
                                                8.76297,
                                                8.16888,
                                                0
                                            ],
                                            [
                                                11.72297,
                                                8.24888,
                                                0
                                            ],
                                            [
                                                17.64297,
                                                8.32888,
                                                0
                                            ],
                                            [
                                                24.16297,
                                                8.40888,
                                                0
                                            ],
                                            [
                                                31.52297,
                                                8.56888,
                                                0
                                            ],
                                            [
                                                36.20297,
                                                8.72888,
                                                0
                                            ],
                                            [
                                                39.08297,
                                                8.92888,
                                                0
                                            ],
                                            [
                                                40.24297,
                                                9.00888,
                                                0
                                            ],
                                            [
                                                41.40297,
                                                9.28888,
                                                0
                                            ],
                                            [
                                                42.12297,
                                                9.72888,
                                                0
                                            ],
                                            [
                                                42.80297,
                                                10.32888,
                                                0
                                            ],
                                            [
                                                43.56297,
                                                11.48888,
                                                0
                                            ],
                                            [
                                                43.72297,
                                                12.00888,
                                                0
                                            ],
                                            [
                                                43.76297,
                                                12.60888,
                                                0
                                            ],
                                            [
                                                43.68297,
                                                13.24888,
                                                0
                                            ],
                                            [
                                                43.48297,
                                                14.52888,
                                                0
                                            ],
                                            [
                                                43.04297,
                                                16.64888,
                                                0
                                            ],
                                            [
                                                42.48297,
                                                19.40888,
                                                0
                                            ],
                                            [
                                                41.60297,
                                                23.68888,
                                                0
                                            ],
                                            [
                                                41.24297,
                                                25.48888,
                                                0
                                            ],
                                            [
                                                41.12297,
                                                26.20888,
                                                0
                                            ]
                                        ],
                                        "source": {
                                            "source_id": "pre_annotation"
                                        },
                                        "visibility": 1,
                                        "frame_number": 0
                                    }
                                ],
                                "locations": {
                                    "visibility": 1,
                                    "points": [
                                        [
                                            -5.07703,
                                            8.20888,
                                            0
                                        ],
                                        [
                                            -2.51703,
                                            8.20888,
                                            0
                                        ],
                                        [
                                            1.56297,
                                            8.16888,
                                            0
                                        ],
                                        [
                                            4.84297,
                                            8.16888,
                                            0
                                        ],
                                        [
                                            8.76297,
                                            8.16888,
                                            0
                                        ],
                                        [
                                            11.72297,
                                            8.24888,
                                            0
                                        ],
                                        [
                                            17.64297,
                                            8.32888,
                                            0
                                        ],
                                        [
                                            24.16297,
                                            8.40888,
                                            0
                                        ],
                                        [
                                            31.52297,
                                            8.56888,
                                            0
                                        ],
                                        [
                                            36.20297,
                                            8.72888,
                                            0
                                        ],
                                        [
                                            39.08297,
                                            8.92888,
                                            0
                                        ],
                                        [
                                            40.24297,
                                            9.00888,
                                            0
                                        ],
                                        [
                                            41.40297,
                                            9.28888,
                                            0
                                        ],
                                        [
                                            42.12297,
                                            9.72888,
                                            0
                                        ],
                                        [
                                            42.80297,
                                            10.32888,
                                            0
                                        ],
                                        [
                                            43.56297,
                                            11.48888,
                                            0
                                        ],
                                        [
                                            43.72297,
                                            12.00888,
                                            0
                                        ],
                                        [
                                            43.76297,
                                            12.60888,
                                            0
                                        ],
                                        [
                                            43.68297,
                                            13.24888,
                                            0
                                        ],
                                        [
                                            43.48297,
                                            14.52888,
                                            0
                                        ],
                                        [
                                            43.04297,
                                            16.64888,
                                            0
                                        ],
                                        [
                                            42.48297,
                                            19.40888,
                                            0
                                        ],
                                        [
                                            41.60297,
                                            23.68888,
                                            0
                                        ],
                                        [
                                            41.24297,
                                            25.48888,
                                            0
                                        ],
                                        [
                                            41.12297,
                                            26.20888,
                                            0
                                        ]
                                    ]
                                }
                            }
                        ],
                        "group_type": null,
                        "frame_count": 200
                    }
                    
                ]
            }
        }
    ]`,
}

