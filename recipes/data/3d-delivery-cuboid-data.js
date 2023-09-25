var cuboid_3D = {
    title: "3D Cuboid JSON-delivery format",
    description: "Structure containing all details related to the project, submission and answers.",
    steps: [
        {
            id: "3d-a-t-d-description",
            displayName: "Description",
            description:
                "The JSON format presented here represents the delivery structure used by the Sama platform for annotation delivery.\
                 It contains all the necessary details regarding how annotations are delivered through our platform.",
        },
        {
            id: "3d-a-t-d-task",
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
                    description: 'This attribute is utilized to capture the date on which a task was delivered. As the delivery process is manually initiated,\
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
            id: "3d-a-t-d-data",
            displayName: "Data",
            subsections: [
                {
                    id: "data-input-metadata",
                    displayName: "Input Metadata",
                    description:
                        'The input metadata contains calibration urls, location urls, videos sources, total frames, important data about the scene.',
                    code: `{
    ...
    "data": {
        "sensor-location": "https://assets.samasource.org/...",
        "right_camera Camera initial rotation": "[0,0,0]",
        "left_camera Camera initial rotation": "[0,0,0]",
        "center_camera Camera initial rotation": "[0,0,0]"
    },
    ...
}`
                },
            ],
        },
        {
            id: "3d-a-t-d-answer",
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
}`
        },
        {
            id: "3d-a-t-d-scene",
            displayName: "Scene",
            description:
                'The scene outputs refer to the overall attributes of a given scene,\
                    this includes the annotated shapes and frame counts',
            code: `{
    ...
    "Scene": [
        {
            "shapes": []
        },
        {
            "shapes": []
        }
    ]
    ...
}`
        },
        {
            id: "3d-a-t-d-shapes",
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
        "object_class": "vehicle"
    },
    ...
}`,
                },
                {
                    id: "shape-type",
                    displayName: "Type Cuboid",
                    description:
                        "A cuboid corresponds to a two sets of points: points and key points\
                        key points denote the horizon, depth, and height of the cube.\
                        points denote front face and back face corners\
                  <br>For more information check the documentation:\
                  sama.helpjuice.com/en_US/3d-cuboid",
                    code: `{
    ...
    "type":"cuboid",
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
    "index": 1,
    ...
}`,

                }

            ]
        },
        {
            id: "3d-a-t-d-key-location",
            displayName: "Key Locations",
            description: "A key location denotes a shape within a frame that has undergone an edit, such as updates to the tag or readjustments made to the shape.\
            It serves as an indicator for significant modifications or changes made to the annotated shape within a specific frame.",
            subsections: [
                {
                    id: "key-location-tags",
                    displayName: "Tags",
                    description: "Tags within key locations refer to dynamic tags.\
                     These tags specifically capture instances where tags have been modified or updated",
                    code: `{
    ...
    "tags": {
        "occlusion": "none",
        "truncation": "none"
    },
    ...
}`,
                },
                {
                    id: "key-location-points",
                    displayName: "Points",
                    description:
                        "List of ordered pairs that correspond to the edited shape, capturing the specific modifications made during the editing process",
                    code: `{
    ...
    "points": [
        [
            10.1042,
            6.20588,
            -0.83359
        ],
        [
            10.0701,
            6.24026,
            0.7481
        ],
        [
            10.04102,
            8.03873,
            -0.87478
        ],
        [
            10.00692,
            8.07311,
            0.70691
        ],
        [
            14.89862,
            6.37339,
            -0.73387
        ],
        [
            14.86452,
            6.40777,
            0.84782
        ],
        [
            14.83544,
            8.20624,
            -0.77506
        ],
        [
            14.80134,
            8.24062,
            0.80663
        ]
    ],
    ...
}`,
                },
                {
                    id: "key-location-source",
                    displayName: "Source",
                    description:
                        "The presence of the source ID indicates whether the annotation corresponds to a pre-annotation. If the annotation is derived from a pre-annotation, the source ID will have the value 'pre_annotation.'\
                         However, if the annotation is not a pre-annotation, the JSON will not include a source input field for that annotation.",
                    code: `{
    ...
    "source": {
        "source_id": "pre_annotation"
    },
    ...
}`,

                },
                {
                    id: "key-location-direction",
                    displayName: "Direction",
                    description:
                        "Direction in our system is determined using the Euler angles system: roll, pitch, yaw. These angles are defined based on the center of the cuboid.",
                    code: `{
    ...
    "direction": {
        "roll": 0.02246403250543165,
        "pitch": 0.02078386006783126,
        "yaw": -3.106668390676402
    },
    ...
}`,

                },

                {
                    id: "key-location-dimension",
                    displayName: "Dimension",
                    description:
                        "Length, width and height corresponds to the dimensions of the cuboid",
                    code: `{
    ...
    "dimensions": {
        "length": 4.79838168707951,
        "width": 1.834401115078161,
        "height": 1.582431057108018
    },
        ...
}`,

                },
                {
                    id: "key-location-visibility",
                    displayName: "Visibility",
                    description:
                        "Visibility indicates whether the shape is visible or not within a frame.\
                         It is represented by a boolean value, determining if the shape is present and discernible\
                        in a particular frame. The visibility of an element can change between frames,\
                        meaning it may be present in one frame but not in the next.",
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
                },
                {
                    id: "key-location-position-center",
                    displayName: "Position Center",
                    description:
                        "The center of the cuboid is determined by its x, y, and z coordinates.\
                         These values specify the spatial position that represents the center of the cuboid.",
                    code: `{
    ...
    "position_center": [
        12.45277,
        7.22325,
        -0.01348
    ]
    ...
}`,
                },



            ]
        },
        {
            id: "3d-a-t-d-locations",
            displayName: "Locations",
            description: "Locations represent the frames that exist between two key frames,\
             and these frames are derived through interpolation. In instances where the shape is not visible within a frame,\
             the visibility value will be set to 0, and there won't be a points array associated with it",
            code: `{
        ...
        "locations": {
            "visibility": 1,
            "points": [
                [
                    10.1042,
                    6.20588,
                    -0.83359
                ],
                [
                    10.0701,
                    6.24026,
                    0.7481
                ],
                [
                    10.04102,
                    8.03873,
                    -0.87478
                ],
                [
                    10.00692,
                    8.07311,
                    0.70691
                ],
                [
                    14.89862,
                    6.37339,
                    -0.73387
                ],
                [
                    14.86452,
                    6.40777,
                    0.84782
                ],
                [
                    14.83544,
                    8.20624,
                    -0.77506
                ],
                [
                    14.80134,
                    8.24062,
                    0.80663
                ]
            ],
            "tags": {
                "occlusion": "none",
                "truncation": "none"
            },
            "position_center": [
                12.45277,
                7.22325,
                -0.01348
            ],
            "direction": {
                "roll": 0.02246403250543165,
                "pitch": 0.02078386006783126,
                "yaw": -3.106668390676402
            },
            "dimensions": {
                "length": 4.79838168707951,
                "width": 1.834401115078161,
                "height": 1.582431057108018
            }
        }
}`

        },

        {
            id: "3d-a-t-d-group-type",
            displayName: "Group Type",
            description:
                "Group type is defined in the project settings",
            code: `{
    "group_type": null,
}`
        },
        {
            id: "3d-a-t-d-frame-count",
            displayName: "Frame Count",
            description:
                "Total number of annotated frames",
            code: `{
    "frame_count": 2
}`
        },
    ],
    fullJson: `[
        [
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
                                    "type": "cuboid",
                                    "index": 0,
                                    "key_locations": {
                                        "tags": {
                                            "occlusion": "none",
                                            "truncation": "none"
                                        },
                                        "points": [
                                            [
                                                10.1042,
                                                6.20588,
                                                -0.83359
                                            ],
                                            [
                                                10.0701,
                                                6.24026,
                                                0.7481
                                            ],
                                            [
                                                10.04102,
                                                8.03873,
                                                -0.87478
                                            ],
                                            [
                                                10.00692,
                                                8.07311,
                                                0.70691
                                            ],
                                            [
                                                14.89862,
                                                6.37339,
                                                -0.73387
                                            ],
                                            [
                                                14.86452,
                                                6.40777,
                                                0.84782
                                            ],
                                            [
                                                14.83544,
                                                8.20624,
                                                -0.77506
                                            ],
                                            [
                                                14.80134,
                                                8.24062,
                                                0.80663
                                            ]
                                        ],
                                        "source": {
                                            "source_id": "pre_annotation"
                                        },
                                        "direction": {
                                            "roll": 0.02246403250543165,
                                            "pitch": 0.02078386006783126,
                                            "yaw": -3.106668390676402
                                        },
                                        "dimensions": {
                                            "length": 4.79838168707951,
                                            "width": 1.834401115078161,
                                            "height": 1.582431057108018
                                        },
                                        "visibility": 1,
                                        "frame_number": 0,
                                        "position_center": [
                                            12.45277,
                                            7.22325,
                                            -0.01348
                                        ]
                                    },
                                    "locations": {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                10.1042,
                                                6.20588,
                                                -0.83359
                                            ],
                                            [
                                                10.0701,
                                                6.24026,
                                                0.7481
                                            ],
                                            [
                                                10.04102,
                                                8.03873,
                                                -0.87478
                                            ],
                                            [
                                                10.00692,
                                                8.07311,
                                                0.70691
                                            ],
                                            [
                                                14.89862,
                                                6.37339,
                                                -0.73387
                                            ],
                                            [
                                                14.86452,
                                                6.40777,
                                                0.84782
                                            ],
                                            [
                                                14.83544,
                                                8.20624,
                                                -0.77506
                                            ],
                                            [
                                                14.80134,
                                                8.24062,
                                                0.80663
                                            ]
                                        ],
                                        "tags": {
                                            "occlusion": "none",
                                            "truncation": "none"
                                        },
                                        "position_center": [
                                            12.45277,
                                            7.22325,
                                            -0.01348
                                        ],
                                        "direction": {
                                            "roll": 0.02246403250543165,
                                            "pitch": 0.02078386006783126,
                                            "yaw": -3.106668390676402
                                        },
                                        "dimensions": {
                                            "length": 4.79838168707951,
                                            "width": 1.834401115078161,
                                            "height": 1.582431057108018
                                        }
                                    }
                                }
                            ],
                            "group_type": null,
                            "frame_count": 2
                        },
                        {
                            "shapes": [
                                {
                                    "tags": {
                                        "object_class": "vehicle"
                                    },
                                    "type": "cuboid",
                                    "index": 0,
                                    "key_locations": {
                                        "tags": {
                                            "occlusion": "none",
                                            "truncation": "none"
                                        },
                                        "points": [
                                            [
                                                20.99287,
                                                6.29963,
                                                -0.67235
                                            ],
                                            [
                                                20.98708,
                                                6.36483,
                                                1.05708
                                            ],
                                            [
                                                20.99422,
                                                8.15865,
                                                -0.74243
                                            ],
                                            [
                                                20.98842,
                                                8.22385,
                                                0.987
                                            ],
                                            [
                                                25.61348,
                                                6.29687,
                                                -0.65676
                                            ],
                                            [
                                                25.60768,
                                                6.36207,
                                                1.07267
                                            ],
                                            [
                                                25.61482,
                                                8.15589,
                                                -0.72684
                                            ],
                                            [
                                                25.60903,
                                                8.22109,
                                                1.00259
                                            ]
                                        ],
                                        "source": {
                                            "source_id": "pre_annotation"
                                        },
                                        "direction": {
                                            "roll": 0.03767993418056637,
                                            "pitch": 0.003372184823309683,
                                            "yaw": 3.140997147403339
                                        },
                                        "dimensions": {
                                            "length": 4.620627124720197,
                                            "width": 1.860340926389568,
                                            "height": 1.730668278151536
                                        },
                                        "visibility": 1,
                                        "frame_number": 0,
                                        "position_center": [
                                            23.30095,
                                            7.26036,
                                            0.16512
                                        ]
                                    },
                                    "locations": {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                20.99287,
                                                6.29963,
                                                -0.67235
                                            ],
                                            [
                                                20.98708,
                                                6.36483,
                                                1.05708
                                            ],
                                            [
                                                20.99422,
                                                8.15865,
                                                -0.74243
                                            ],
                                            [
                                                20.98842,
                                                8.22385,
                                                0.987
                                            ],
                                            [
                                                25.61348,
                                                6.29687,
                                                -0.65676
                                            ],
                                            [
                                                25.60768,
                                                6.36207,
                                                1.07267
                                            ],
                                            [
                                                25.61482,
                                                8.15589,
                                                -0.72684
                                            ],
                                            [
                                                25.60903,
                                                8.22109,
                                                1.00259
                                            ]
                                        ],
                                        "tags": {
                                            "occlusion": "none",
                                            "truncation": "none"
                                        },
                                        "position_center": [
                                            23.30095,
                                            7.26036,
                                            0.16512
                                        ],
                                        "direction": {
                                            "roll": 0.03767993418056637,
                                            "pitch": 0.003372184823309683,
                                            "yaw": 3.140997147403339
                                        },
                                        "dimensions": {
                                            "length": 4.620627124720197,
                                            "width": 1.860340926389568,
                                            "height": 1.730668278151536
                                        }
                                    }
                                }
                            ],
                            "group_type": null,
                            "frame_count": 2
                        }
                    ]
                }
            }
        ]
    ]`,
}