var i_s_video_creation_data = {
    cardImg: "https://sama-documentation-assets.s3.amazonaws.com/Recipes/recipes-header-pink.png",
    title: "Video Instance Segmentation JSON-creation",
    description: "Structure used to create video tasks in the Sama Platform.",
    steps: [
        {
            id: "i-s-c-video-description",
            displayName: "Description",
            description:
                "This JSON corresponds to the creation format, which means that this is the structure used to create video\
                 tasks in the Sama Platform",
        },
        {
            id: "i-s-c-video-data",
            displayName: "Data",
            subsections: [
                {
                    id: "data-input-meta-data",
                    displayName: "Input meta-data",
                    description:
                        'The input metadata contains image information such as size, height, and width.\
                        <br>Note: Image metadata will only be available if "Include Image Metadata" \
                        is enabled in project > setting > outputs > Pre-processing settings',
                    code: `{
        ...
         {
            "video Files": "[\"000000.jpg\",\"000001.jpg\",\"000002.jpg\",\"000003.jpg\",\"000004.jpg\",\"000005.jpg\",\"000006.jpg\",\"000007.jpg\",\"000008.jpg\",\"000009.jpg\",\"000010.jpg\",\"000011.jpg\",\"000012.jpg\",\"000013.jpg\",\"000014.jpg\"]",
            "video Original url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/VideoAnnotations/New-York-Street-Short-Video.mp4",
            "video Original file name": "New-York-Street-Short-Video.mp4",
            "video Frames per second": "29.97002997002997",
            "video Total frames": "29",
            "video Height": "1080",
            "video Width": "1920",
            "video Duration": "0.531000",
            ...
          }
      }`,
                },
                {
                    id: "data-input",
                    displayName: "Input",
                    description:
                        'The "data" element lists the inputs as they are defined in the project settings.\
                        In this example the inputs corresponds to "name" and "url"',
                    code: `{
          {
              ...
              "url": "https://assets.samasource.com/api/v1/assets/8de15c3c-d358-4794-a846-53b565f167df?linkedUrl=https%3A%2F%2Fsamahub3.s3.amazonaws.com%2Fcacheable_client_assets%2Fall%2F23%2Fexternal%2Fprojects%2F13481%2Fuploads%2F612584%2Ftasks%2F63e163d9c747fb00a7893bc2%2Finputs%2Furl%2FNew-York-Street-Short-Video.zip",
              "name": "City",
              ...
          }  
      }`,
                },
            ],
        },
        {
            id: "i-s-c-video-output",
            displayName: "Output",
            subsections: [
                {
                    id: "output-static",
                    displayName: "Static output",
                    description:
                        'The "tags" element is where shape outputs and their corresponding answers are stored.\
                        This is where static tags (often also referred to as static shape outputs) are stored. These tags do not change from one frame to the next.',
                    code: `{
          ...
          "tags": {
            "object": "color|black and white",
            "category": "pedestrian",
            "position": "forward"
        },
          ...
      }`,
                },
                {
                    id: "output-dynamic",
                    displayName: "Dynamic output",
                    description:
                        '"tags" that are nested within "key_locations" or "locations" hold dynamic tags.\
                         These can change from one key_frame to the next.',
                    code: `{
          ...
            {
                "tags": {
                    "road side": {
                        "left": "1",
                        "none": "0",
                        "right": "0"
                    }
                },
            }
          ...
      }`,
                },
                {
                    id: "output-shapes",
                    displayName: "Shapes output",
                    description: "A list containing the shape description and attributes for a specific annotation.\
                    One task can have more than one shape.\
                    Annotating a video can be seen as annotating a sequence of images.\
                    Each shape that is drawn on an image of this sequence corresponds to a shaped output.\
                    <br>Note: Shape outputs are also called nested outputs, because they're nested inside a workspace output or because they appear as a nested object in the JSON output file.",
                    code: `{
                    ...
                    {
                        "shapes": [
                            {
                                "tags": {},
                                "type": "",
                                ....
                            },
                        ]
                    }
                ...
            }`,


                },
                {
                    id: "output-scene",
                    displayName: "Scene output",
                    description:
                        'Scene outputs correspond to the whole workspace.\
                        In this example, "video", "date" and "timeofday" plus the prefix "output_" correspond to scene outputs',
                    code: `{
          ...
          {
            "output_video": [
                {
                    shapes: [...]
                }
            ],

          }
          ...
      }`,
                },
                {
                    id: "output-workspace",
                    displayName: "Workspace output",
                    description:
                        'The workspace refers to the canvas on which annotations are created.\
                         Any shapes that are drawn on this canvas represent the output of the workspace.\
                          The workspace can take the form of an "image" or "video." In this particular example,\
                          the workspace is classified as a "video."',
                    code: `{
          ...
          {
            
            "output_video": []
          }
          ...
       
      }`,
                },

            ],
        },
        {
            id: "i-s-c-video-output-type",
            displayName: "Output type",
            subsections: [
                {
                    id: "output-type-multi-level-menu",
                    displayName: "Multi-level menu",
                    description:
                        'Multi-level menus are a series of hierarchical menus. The way this hierarchy is translated into a JSON format is with the "|" character.\
                        In this example, in the output "object" you can see that "color" is the first level and "black and white" or "multiple colors" is the second level.',
                    code: `{
          ...
          {
            "object": "color|black and white",
          }
          ...
      }`,
                },
                {
                    id: "output-type-dropdown",
                    displayName: "Dropdown",
                    description:
                        'The syntax for a dropdown output follows a simple "key": "value" structure.\
                        In this example, you can find a dropdown under the "category" tag.',
                    code: `{
          ...
          {
            "category": "pedestrian",
          }
          ...
       
      }`,
                },
                {
                    id: "output-type-radio-button",
                    displayName: "Radio Button",
                    description:
                        'The syntax for a radio button output follows a simple "key": "value" structure.\
                        In this example, you can find a radio button under the "position" tag.',
                    code: `{
          ...
          {
            "position": "forward"
          }
          ...
       
      }`,
                },
                {
                    id: "output-type-checkboxes",
                    displayName: "Checkboxes",
                    description:
                        'The syntax for a checkboxes output corresponds to\
                        "key": { "option1": "0", "option2": "1" }\
                        Where number 1 indicates the selected option.\
                        You can find checkbox examples under the "road side" tag.',
                    code: `{
          ...
          {
            "road side": {
                "left": "1",
                "none": "0",
                "right": "0"
            }
          }
          ...
       
      }`,
                },
                {
                    id: "output-type-date",
                    displayName: "Date",
                    description:
                        'Date output follows standard date syntax',
                    code: `{
          ...
          {
            "output_date": "2025-05-07",
          }
          ...
       
      }`,
                },
                {
                    id: "output-type-text-area",
                    displayName: "Text area",
                    description:
                        'The syntax for a text area output follows a simple\
                         "key": "value" structure, where the key can be a paragraph.',
                    code: `{
          ...
          {
            "output_comments": "This is a test comment",
          }
          ...
       
      }`,
                },

            ],
        },

        {
            id: "i-s-c-video-multiple-frames",
            displayName: "Multiple frames",
            description:
                'This JSON example shows two different shapes that are present throughout the video.\
                The video used in this example has 15 frames, meaning an element should be annotated frame by frame from 0 to 15.\
                In this example, you can see a rectangle and a cuboid. Both shapes contain a list of "points" inside "key_locations" and the "frame_number" specifying which frame corresponds to that annotation',
            code: `{
                ...
                {
                    "key_locations": [
                        {
                            "tags": {
                                "road side": {
                                    "left": "1",
                                    "none": "0",
                                    "right": "0"
                                }
                            },
                            "points": [
                                [
                                    337,
                                    668
                                ],
                                [
                                    492,
                                    668
                                ],
                                [
                                    337,
                                    972
                                ],
                                [
                                    492,
                                    972
                                ]
                            ],
                            "visibility": 1,
                            "frame_number": 0
                        },
                        {
                            "points": [
                                [
                                    321,
                                    664
                                ],
                                [
                                    396,
                                    664
                                ],
                                [
                                    321,
                                    968
                                ],
                                [
                                    396,
                                    968
                                ]
                            ],
                            "visibility": 1,
                            "frame_number": 5
                        },
                        {
                            "points": [
                                [
                                    209,
                                    666
                                ],
                                [
                                    386,
                                    666
                                ],
                                [
                                    209,
                                    970
                                ],
                                [
                                    386,
                                    970
                                ]
                            ],
                            "visibility": 1,
                            "frame_number": 10
                        },
                        {
                            "points": [
                                [
                                    175,
                                    668
                                ],
                                [
                                    371,
                                    668
                                ],
                                [
                                    175,
                                    972
                                ],
                                [
                                    371,
                                    972
                                ]
                            ],
                            "visibility": 1,
                            "frame_number": 14
                        }
                    ]
                    ...
                    {
                        "key_locations": [
                            {
                                "tags": {
                                    "road side": {
                                        "left": "0",
                                        "none": "0",
                                        "right": "1"
                                    }
                                },
                                "points": [
                                    [
                                        1281,
                                        1057
                                    ],
                                    [
                                        1281,
                                        648
                                    ],
                                    [
                                        1693,
                                        1070
                                    ],
                                    [
                                        1693.0,
                                        647.936117936118
                                    ],
                                    [
                                        1274,
                                        980
                                    ],
                                    [
                                        1274.0,
                                        648.3783783783783
                                    ],
                                    [
                                        1605.867326732673,
                                        988.4950495049504
                                    ],
                                    [
                                        1605.867326732673,
                                        648.3366336633665
                                    ]
                                ],
                                "visibility": 1,
                                "frame_number": 0,
                                "key_points": [
                                    [
                                        1267,
                                        650
                                    ],
                                    [
                                        1693,
                                        1070
                                    ],
                                    [
                                        1281,
                                        1057
                                    ],
                                    [
                                        1274,
                                        980
                                    ],
                                    [
                                        1281,
                                        648
                                    ]
                                ]
                            },
                            {
                                "points": [
                                    [
                                        1280,
                                        1059
                                    ],
                                    [
                                        1280,
                                        650
                                    ],
                                    [
                                        1716,
                                        1072
                                    ],
                                    [
                                        1716.0,
                                        650.0
                                    ],
                                    [
                                        1273,
                                        982
                                    ],
                                    [
                                        1273.0,
                                        650.0
                                    ],
                                    [
                                        1624.632117517025,
                                        990.5149451515907
                                    ],
                                    [
                                        1624.632117517025,
                                        650.0
                                    ]
                                ],
                                "visibility": 1,
                                "frame_number": 5,
                                "key_points": [
                                    [
                                        1267,
                                        650
                                    ],
                                    [
                                        1716,
                                        1072
                                    ],
                                    [
                                        1280,
                                        1059
                                    ],
                                    [
                                        1273,
                                        982
                                    ],
                                    [
                                        1280,
                                        650
                                    ]
                                ]
                            },
                            {
                                "points": [
                                    [
                                        1280,
                                        1059
                                    ],
                                    [
                                        1280,
                                        650
                                    ],
                                    [
                                        1711,
                                        1072
                                    ],
                                    [
                                        1711.0,
                                        650.0
                                    ],
                                    [
                                        1273,
                                        982
                                    ],
                                    [
                                        1273.0,
                                        650.0
                                    ],
                                    [
                                        1620.597580252196,
                                        990.5149451515908
                                    ],
                                    [
                                        1620.597580252196,
                                        650.0
                                    ]
                                ],
                                "visibility": 1,
                                "frame_number": 10,
                                "key_points": [
                                    [
                                        1267,
                                        650
                                    ],
                                    [
                                        1711,
                                        1072
                                    ],
                                    [
                                        1280,
                                        1059
                                    ],
                                    [
                                        1273,
                                        982
                                    ],
                                    [
                                        1280,
                                        650
                                    ]
                                ]
                            }
                        ]
                    }
                }
                ...
            }`,
        },
        {
            id: "i-s-c-video-visibility",
            displayName: "Visibility",
            description:
                'The "visibility" element denotes whether the shape is visible or not in that frame.\
                An element can be present in one frame but then in the next frame it can be behind\
                another object so that element will not be visible in that frame but it will be present in the next frame.',
            code: `{
                ...
                "visibility": 1,
                ...
            }`,
        },
        {
            id: "i-s-c-video-frame-number",
            displayName: "Frame number",
            description:
                'The "frame_number" of a "key_frame" refers to the index in the list of all frames.',
            code: `{
                ...
                "frame_number": 0
                ...
            }`,
        },
    ],
    fullJson: `[
        {
            "priority": 0,
            "data": {
                "video Files": "[\"000000.jpg\",\"000001.jpg\",\"000002.jpg\",\"000003.jpg\",\"000004.jpg\",\"000005.jpg\",\"000006.jpg\",\"000007.jpg\",\"000008.jpg\",\"000009.jpg\",\"000010.jpg\",\"000011.jpg\",\"000012.jpg\",\"000013.jpg\",\"000014.jpg\"]",
                "video Original url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/VideoAnnotations/New-York-Street-Short-Video.mp4",
                "video Original file name": "New-York-Street-Short-Video.mp4",
                "video Frames per second": "29.97002997002997",
                "video Total frames": "29",
                "video Height": "1080",
                "video Width": "1920",
                "video Duration": "0.531000",
                "url": "https://assets.samasource.com/api/v1/assets/8de15c3c-d358-4794-a846-53b565f167df?linkedUrl=https%3A%2F%2Fsamahub3.s3.amazonaws.com%2Fcacheable_client_assets%2Fall%2F23%2Fexternal%2Fprojects%2F13481%2Fuploads%2F612584%2Ftasks%2F63e163d9c747fb00a7893bc2%2Finputs%2Furl%2FNew-York-Street-Short-Video.zip",
                "name": "City",
                "output_video": [
                    {
                        "shapes": [
                            {
                                "tags": {
                                    "object": "color|black and white",
                                    "category": "pedestrian",
                                    "position": "forward"
                                },
                                "type": "rectangle",
                                "index": 1,
                                "key_locations": [
                                    {
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        },
                                        "points": [
                                            [
                                                337,
                                                668
                                            ],
                                            [
                                                492,
                                                668
                                            ],
                                            [
                                                337,
                                                972
                                            ],
                                            [
                                                492,
                                                972
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 0
                                    },
                                    {
                                        "points": [
                                            [
                                                321,
                                                664
                                            ],
                                            [
                                                396,
                                                664
                                            ],
                                            [
                                                321,
                                                968
                                            ],
                                            [
                                                396,
                                                968
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 5
                                    },
                                    {
                                        "points": [
                                            [
                                                209,
                                                666
                                            ],
                                            [
                                                386,
                                                666
                                            ],
                                            [
                                                209,
                                                970
                                            ],
                                            [
                                                386,
                                                970
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 10
                                    },
                                    {
                                        "points": [
                                            [
                                                175,
                                                668
                                            ],
                                            [
                                                371,
                                                668
                                            ],
                                            [
                                                175,
                                                972
                                            ],
                                            [
                                                371,
                                                972
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 14
                                    }
                                ]
                            }
                        ],
                        "group_type": null,
                        "frame_count": 15
                    },
                    {
                        "shapes": [
                            {
                                "tags": {
                                    "object": "color|multiple colors",
                                    "category": "cab",
                                    "position": "forward"
                                },
                                "type": "cuboid",
                                "index": 2,
                                "key_locations": [
                                    {
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        },
                                        "points": [
                                            [
                                                1281,
                                                1057
                                            ],
                                            [
                                                1281,
                                                648
                                            ],
                                            [
                                                1693,
                                                1070
                                            ],
                                            [
                                                1693.0,
                                                647.936117936118
                                            ],
                                            [
                                                1274,
                                                980
                                            ],
                                            [
                                                1274.0,
                                                648.3783783783783
                                            ],
                                            [
                                                1605.867326732673,
                                                988.4950495049504
                                            ],
                                            [
                                                1605.867326732673,
                                                648.3366336633665
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 0,
                                        "key_points": [
                                            [
                                                1267,
                                                650
                                            ],
                                            [
                                                1693,
                                                1070
                                            ],
                                            [
                                                1281,
                                                1057
                                            ],
                                            [
                                                1274,
                                                980
                                            ],
                                            [
                                                1281,
                                                648
                                            ]
                                        ]
                                    },
                                    {
                                        "points": [
                                            [
                                                1280,
                                                1059
                                            ],
                                            [
                                                1280,
                                                650
                                            ],
                                            [
                                                1716,
                                                1072
                                            ],
                                            [
                                                1716.0,
                                                650.0
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273.0,
                                                650.0
                                            ],
                                            [
                                                1624.632117517025,
                                                990.5149451515907
                                            ],
                                            [
                                                1624.632117517025,
                                                650.0
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 5,
                                        "key_points": [
                                            [
                                                1267,
                                                650
                                            ],
                                            [
                                                1716,
                                                1072
                                            ],
                                            [
                                                1280,
                                                1059
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1280,
                                                650
                                            ]
                                        ]
                                    },
                                    {
                                        "points": [
                                            [
                                                1280,
                                                1059
                                            ],
                                            [
                                                1280,
                                                650
                                            ],
                                            [
                                                1711,
                                                1072
                                            ],
                                            [
                                                1711.0,
                                                650.0
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273.0,
                                                650.0
                                            ],
                                            [
                                                1620.597580252196,
                                                990.5149451515908
                                            ],
                                            [
                                                1620.597580252196,
                                                650.0
                                            ]
                                        ],
                                        "visibility": 1,
                                        "frame_number": 10,
                                        "key_points": [
                                            [
                                                1267,
                                                650
                                            ],
                                            [
                                                1711,
                                                1072
                                            ],
                                            [
                                                1280,
                                                1059
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1280,
                                                650
                                            ]
                                        ]
                                    }
                                ]
                            }
                        ],
                        "group_type": null,
                        "frame_count": 15
                    }
                ],
                "output_date": "2025-05-07",
                "output_comments": "This is a test comment"
            }
        }
    ]`,
};