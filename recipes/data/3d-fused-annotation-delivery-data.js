var fused_annotation = {
    title: "Fused Annotation JSON-delivery format",
    description: "Structure containing all details related to the project, submission and answers.",
    steps: [
        {
            id: "fused-annotation-a-t-description",
            displayName: "Description",
            description:
                "The JSON format presented here represents the delivery structure used by the Sama platform for annotation delivery.\
                 It contains all the necessary details regarding how annotations are delivered through our platform.",
        },
        {
            id: "fused-annotation-a-t-task",
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
            id: "fused-annotation-a-t-data",
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
            id: "fused-annotation-a-t-answer",
            displayName: "Answers",
            description:
                'The "answers" element stores the workspace output and the shape outputs\
                 as a dictionary of key-value pairs.',
            subsections: [
                {
                    id: "answer-left-camera",
                    displayName: "Left Camera",
                    description:
                        'The left camera captures visual data from the left side of the sensor setup. It provides a specific field of view that is offset to the left relative to the center camera',
                    code: `{
    "left_camera":[
        {
            "shapes":[
                {
                    "tags":{
                    "object_class":"vehicle"
                    },
                    "type":"rectangle",
                    "index":1,
                    "key_locations":[
                    {
                        "tags":{
                            "occlusion":"none",
                            "truncation":"none"
                        },
                        "points":[
                            [
                                1030,
                                513
                            ],
                            [
                                1252,
                                513
                            ],
                            [
                                1030,
                                613
                            ],
                            [
                                1252,
                                613
                            ]
                        ],
                        "visibility":1,
                        "frame_number":0
                    }
                    ],
                    "locations": [
                        {
                            "visibility": 1,
                                "points": [
                                    [
                                        1294,
                                        519
                                    ],
                                    [
                                        1416,
                                        519
                                    ],
                                    [
                                        1294,
                                        587
                                    ],
                                    [
                                        1416,
                                        587
                                    ]
                                ],
                                "tags": {
                                    "truncation": "none",
                                    "occlusion": "none"
                                }
                        }
                    ]
                }
            ],
            "group_type":null,
            "frame_count":2
        },
        {
            "shapes":[
                {
                    "tags":{
                    "object_class":"vehicle"
                    },
                    "type":"rectangle",
                    "index":3,
                    "key_locations":[
                    {
                        "tags":{
                            "occlusion":"none",
                            "truncation":"none"
                        },
                        "points":[
                            [
                                1294,
                                519
                            ],
                            [
                                1416,
                                519
                            ],
                            [
                                1294,
                                587
                            ],
                            [
                                1416,
                                587
                            ]
                        ],
                        "visibility":1,
                        "frame_number":0
                    }
                    ]
                }
            ],
            "group_type":null,
            "frame_count":2
        }
        ]

}`
                },
                {
                    id: "answer-right-camera",
                    displayName: "Right Camera",
                    description:
                        'The right camera captures visual data from the right side of the sensor setup. Similar to the left camera, it offers a specific field of view that is offset to the right relative to the center camera',
                    code: `{
    "right_camera": [
        {
            "shapes":[
                {
                    "tags":{
                    "object_class":"vehicle"
                    },
                    "type":"rectangle",
                    "index":1,
                    "key_locations":[
                    {
                        "tags":{
                            "occlusion":"none",
                            "truncation":"none"
                        },
                        "points": [
                            [
                                750,
                                240
                            ],
                            [
                                1050,
                                240
                            ],
                            [
                                750,
                                375
                            ],
                            [
                                1050,
                                375
                            ]
                        ],
                        "visibility": 0,
                        "frame_number": 0
                    }
                    ],
                    "locations": [
                        {
                            "visibility": 0
                        }
                    ]
                }
            ],
            "group_type":null,
            "frame_count":2
        },
        {
            "shapes":[
                {
                    "tags":{
                    "object_class":"vehicle"
                    },
                    "type":"rectangle",
                    "index":3,
                    "key_locations":[
                    {
                        "tags":{
                            "occlusion":"none",
                            "truncation":"none"
                        },
                        "points": [
                            [
                                750,
                                240
                            ],
                            [
                                1050,
                                240
                            ],
                            [
                                750,
                                375
                            ],
                            [
                                1050,
                                375
                            ]
                        ],
                        "visibility":0,
                        "frame_number":0
                    }
                    ],
                    "locations": [
                        {
                            "visibility": 0
                        }
                    ]
                }
            ],
            "group_type":null,
            "frame_count":2
        }
    ]

}`
                },
                {
                    id: "answer-center-camera",
                    displayName: "Center Camera",
                    description:
                        'The center camera serves as the main or primary camera in the sensor setup. It typically captures the central view of the scene and is often aligned with other sensors, such as LiDAR or depth sensors. The data from the center camera forms the backbone of the 3D fused annotation, as it is used to calibrate and synchronize data from other sensors, ensuring accurate spatial alignment',
                    code: `{
    "center_camera": [
        {
            "shapes":[
                {
                    "tags":{
                        "object_class":"vehicle"
                    },
                    "type":"rectangle",
                    "index":1,
                    "key_locations":[
                        {
                        "points": [
                            [
                                158,
                                505
                            ],
                            [
                                383,
                                505
                            ],
                            [
                                158,
                                603
                            ],
                            [
                                383,
                                603
                            ]
                        ],
                        "visibility": 1,
                        "frame_number": 0
                        }
                    ],
                    "locations": [
                        {
                            "visibility": 1,
                            "points": [
                                [
                                    158,
                                    505
                                ],
                                [
                                    383,
                                    505
                                ],
                                [
                                    158,
                                    603
                                ],
                                [
                                    383,
                                    603
                                ]
                            ],
                            "tags": {
                                "truncation": "partial",
                                "occlusion": "none"
                            }
                        }
                    ]
                }
            ],
            "group_type":null,
            "frame_count":2
            },
            {
            "shapes":[
                {
                    "tags":{
                        "object_class":"vehicle"
                    },
                    "type":"rectangle",
                    "index":3,
                    "key_locations":[
                        {
                        "points": [
                            [
                                426,
                                515
                            ],
                            [
                                530,
                                515
                            ],
                            [
                                426,
                                576
                            ],
                            [
                                530,
                                576
                            ]
                        ],
                        "visibility":1,
                        "frame_number":0
                        }
                    ],
                    "locations": [
                    {
                        "visibility": 1,
                        "points": [
                            [
                                426,
                                515
                            ],
                            [
                                530,
                                515
                            ],
                            [
                                426,
                                576
                            ],
                            [
                                530,
                                576
                            ]
                        ],
                        "tags": {
                            "occlusion": "none",
                            "truncation": "none"
                        }
                    }
                    ]
                }
            ],
            "group_type":null,
            "frame_count":2
            }
    ]
}`
                }

            ],
            code: `{
    "answers": {
        "left_camera": [
            {
                "shapes": []
            },
            {
                "shapes": []
            }
        ],
        "right_camera": [
            {
                "shapes": []
            },
            {
                "shapes": []
            }
        ],
        "center_camera": [
            {
                "shapes": []
            },
            {
                "shapes": []
            }
        ],
    }
}`,
        },
        {
            id: "fused-annotation-a-t-scene",
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
            id: "fused-annotation-a-t-shapes",
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
    }
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

                },

            ]
        },
        {
            id: "fused-annotation-a-t-key-location",
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
    "points": [
        [
            750,
            240
        ],
        [
            1050,
            240
        ],
        [
            750,
            375
        ],
        [
            1050,
            375
        ]
    ],
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
            id: "fused-annotation-a-t-locations",
            displayName: "Locations",
            description: "Locations represent the frames that exist between two key frames,\
            and these frames are derived through interpolation. In instances where the shape is not visible within a frame,\
            the visibility value will be set to 0, and there won't be a points array associated with it",
            code: `[
    {
        "locations": [
            {
                "visibility": 0
            },
            {
                "visibility": 1,
                "points": [
                    [
                        158,
                        505
                    ],
                    [
                        383,
                        505
                    ],
                    [
                        158,
                        603
                    ],
                    [
                        383,
                        603
                    ]
                ],
                "tags": {
                    "truncation": "partial",
                    "occlusion": "none"
                }
            }
        ]
    }
]`

        },

        {
            id: "fused-annotation-a-t-group-type",
            displayName: "Group Type",
            description:
                "Group type is defined in the project settings",
            code: `{
    "group_type": null,
}`
        },
        {
            id: "fused-annotation-a-t-frame-count",
            displayName: "Frame Count",
            description:
                "Total number o annotated frames",
            code: `{
    "frame_count": 2
}`
        },
    ],
    fullJson: `[
        [
           {
              "id":"646b7ff84948945cc0a03fff",
              "project_id":20329,
              "created_at":"2023-05-22T14:47:07.871Z",
              "delivered_at":"2023-05-22T15:50:16.781Z",
              "state":"delivered",
              "data":{
                 "sensor-location":"https://assets.samasource.org/...",
                 "right_camera Camera initial rotation":"[0,0,0]",
                 "left_camera Camera initial rotation":"[0,0,0]",
                 "center_camera Camera initial rotation":"[0,0,0]"
              },
              "answers":{
                 "left_camera":[
                    {
                       "shapes":[
                          {
                             "tags":{
                                "object_class":"vehicle"
                             },
                             "type":"rectangle",
                             "index":1,
                             "key_locations":[
                                {
                                   "tags":{
                                      "occlusion":"none",
                                      "truncation":"none"
                                   },
                                   "points":[
                                      [
                                         1030,
                                         513
                                      ],
                                      [
                                         1252,
                                         513
                                      ],
                                      [
                                         1030,
                                         613
                                      ],
                                      [
                                         1252,
                                         613
                                      ]
                                   ],
                                   "visibility":1,
                                   "frame_number":0
                                }
                             ],
                             "locations": [
                                  {
                                      "visibility": 1,
                                         "points": [
                                             [
                                                 1294,
                                                 519
                                             ],
                                             [
                                                 1416,
                                                 519
                                             ],
                                             [
                                                 1294,
                                                 587
                                             ],
                                             [
                                                 1416,
                                                 587
                                             ]
                                         ],
                                         "tags": {
                                             "truncation": "none",
                                             "occlusion": "none"
                                         }
                                  }
                             ]
                          }
                       ],
                       "group_type":null,
                       "frame_count":2
                    },
                    {
                       "shapes":[
                          {
                             "tags":{
                                "object_class":"vehicle"
                             },
                             "type":"rectangle",
                             "index":3,
                             "key_locations":[
                                {
                                   "tags":{
                                      "occlusion":"none",
                                      "truncation":"none"
                                   },
                                   "points":[
                                      [
                                         1294,
                                         519
                                      ],
                                      [
                                         1416,
                                         519
                                      ],
                                      [
                                         1294,
                                         587
                                      ],
                                      [
                                         1416,
                                         587
                                      ]
                                   ],
                                   "visibility":1,
                                   "frame_number":0
                                }
                             ]
                          }
                       ],
                       "group_type":null,
                       "frame_count":2
                    }
                 ],
                 "right_camera": [
                      {
                         "shapes":[
                            {
                               "tags":{
                                  "object_class":"vehicle"
                               },
                               "type":"rectangle",
                               "index":1,
                               "key_locations":[
                                  {
                                     "tags":{
                                        "occlusion":"none",
                                        "truncation":"none"
                                     },
                                     "points": [
                                         [
                                             750,
                                             240
                                         ],
                                         [
                                             1050,
                                             240
                                         ],
                                         [
                                             750,
                                             375
                                         ],
                                         [
                                             1050,
                                             375
                                         ]
                                     ],
                                     "visibility": 0,
                                     "frame_number": 0
                                  }
                               ],
                               "locations": [
                                     {
                                         "visibility": 0
                                     }
                               ]
                            }
                         ],
                         "group_type":null,
                         "frame_count":2
                      },
                      {
                         "shapes":[
                            {
                               "tags":{
                                  "object_class":"vehicle"
                               },
                               "type":"rectangle",
                               "index":3,
                               "key_locations":[
                                  {
                                     "tags":{
                                        "occlusion":"none",
                                        "truncation":"none"
                                     },
                                     "points": [
                                         [
                                             750,
                                             240
                                         ],
                                         [
                                             1050,
                                             240
                                         ],
                                         [
                                             750,
                                             375
                                         ],
                                         [
                                             1050,
                                             375
                                         ]
                                     ],
                                     "visibility":0,
                                     "frame_number":0
                                  }
                               ],
                                "locations": [
                                     {
                                         "visibility": 0
                                     }
                               ]
                            }
                         ],
                         "group_type":null,
                         "frame_count":2
                      }
     
     
                 ],
                 "center_camera": [
                     {
                         "shapes":[
                            {
                               "tags":{
                                  "object_class":"vehicle"
                               },
                               "type":"rectangle",
                               "index":1,
                               "key_locations":[
                                  {
                                     "points": [
                                         [
                                             158,
                                             505
                                         ],
                                         [
                                             383,
                                             505
                                         ],
                                         [
                                             158,
                                             603
                                         ],
                                         [
                                             383,
                                             603
                                         ]
                                     ],
                                     "visibility": 1,
                                     "frame_number": 0
                                  }
                               ],
                               "locations": [
                                     {
                                         "visibility": 1,
                                         "points": [
                                             [
                                                 158,
                                                 505
                                             ],
                                             [
                                                 383,
                                                 505
                                             ],
                                             [
                                                 158,
                                                 603
                                             ],
                                             [
                                                 383,
                                                 603
                                             ]
                                         ],
                                         "tags": {
                                             "truncation": "partial",
                                             "occlusion": "none"
                                         }
                                     }
                               ]
                            }
                         ],
                         "group_type":null,
                         "frame_count":2
                      },
                      {
                         "shapes":[
                            {
                               "tags":{
                                  "object_class":"vehicle"
                               },
                               "type":"rectangle",
                               "index":3,
                               "key_locations":[
                                  {
                                     "points": [
                                         [
                                             426,
                                             515
                                         ],
                                         [
                                             530,
                                             515
                                         ],
                                         [
                                             426,
                                             576
                                         ],
                                         [
                                             530,
                                             576
                                         ]
                                     ],
                                     "visibility":1,
                                     "frame_number":0
                                  }
                               ],
                                "locations": [
                                 {
                                     "visibility": 1,
                                     "points": [
                                         [
                                             426,
                                             515
                                         ],
                                         [
                                             530,
                                             515
                                         ],
                                         [
                                             426,
                                             576
                                         ],
                                         [
                                             530,
                                             576
                                         ]
                                     ],
                                     "tags": {
                                         "occlusion": "none",
                                         "truncation": "none"
                                     }
                                 }
                               ]
                            }
                         ],
                         "group_type":null,
                         "frame_count":2
                      }
                 ]
              }
           }
        ]
     ]`,
}

