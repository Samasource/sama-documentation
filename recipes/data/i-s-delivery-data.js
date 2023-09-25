var i_s_delivery_data = {
    title: "Instance Segmentation JSON-delivery",
    description: "Structure containing all details related to the project, submission ans answers.",
    steps: [
        {
            id: "i-s-d-description",
            displayName: "Description",
            description:
                "This JSON corresponds to the delivery format. It is a structure that contains all details related to the project and the submission. For example, in this JSON you can find the project id or the creation date and get information related to the steps.\
         <br>Note: You can't use this format to create new tasks in the Sama Platform",
        },
        {
            id: "i-s-d-task",
            displayName: "Task",
            subsections: [
                {
                    id: "task-id",
                    displayName: "Id",
                    description:
                        'Corresponds to a unique identifier that addresses a specific task.',
                    code: `{
          ...
          "id": "63d842aa26571a7ea08dff43",
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
          "project_id": 13455,
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
          "created_at": "2023-01-30T22:23:33.712Z",
          ...   
      }`,
                },
                {
                    id: "task-delivered-at",
                    displayName: "Delivered at",
                    description:
                        'Is used to record the date that a task was set to deliver. Since delivery is a manual process, the attribute\'s default value is null until delivery is set.',
                    code: `{
          ...
          "delivered_at": null,
          ...   
      }`,
                },
                {
                    id: "task-state",
                    displayName: "State",
                    description:
                        'Indicates the state of the task: new, in progress, completed, delivered, rejected, approved, acknowledged \
                        Please see https://sama.readme.io/reference/task-states for more details ',
                    code: `{
          ...
          "state": "completed",
          ...   
      }`,
                },
            ],
        },
        {
            id: "i-s-d-data",
            displayName: "Data",
            subsections: [
                {
                    id: "data-input-metadata",
                    displayName: "Input metadata",
                    description:
                        'The input metadata contains image information such as size, height, and width.\
                        Note: Image metadata will only be available if "Include Image Metadata" is enabled in project > setting > outputs > Pre-processing settings',
                    code: `{
          ...
          "image Original url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/Assets/IMG_2299.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAYVR7GFDQFIPOHDU5%2F20230131%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20230131T230534Z\u0026X-Amz-Expires=14400\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=76ef5638b7859cc8cd4f04699ead20c771c3f3fb333b1c1b46c3c8905eebe441",
          "image Original file name": "IMG_2299.JPG",
          "image Size": "1452322",
          "image Height": "2448",
          "image Width": "3264",
          ...
      }`,
                },
                {
                    id: "data-input",
                    displayName: "Input",
                    description:
                        'The "data" element lists the inputs as they are defined in the project settings.\
                        In this example, the inputs correspond to "name" and "url"',
                    code: `{
          ...
          "url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/Assets/IMG_2299.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAYVR7GFDQFIPOHDU5%2F20230131%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20230131T230534Z\u0026X-Amz-Expires=14400\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=76ef5638b7859cc8cd4f04699ead20c771c3f3fb333b1c1b46c3c8905eebe441",
          "name": "Jones Bridge"
          ...
      }`,
                },
            ],
        },
        {
            id: "i-s-d-answer",
            displayName: "Answer",
            description:
                'The "answers" element stores the workspace output and the shape outputs\
                 as a dictionary of key-value pairs.',
            code: `{
          ...
          "answers": {...},
          ...   
      }`,
        },
        {
            id: "i-s-c-output",
            displayName: "Output",
            subsections: [
                {
                    id: "output-scene-output",
                    displayName: "Scene output",
                    description:
                        'The scene outputs refer to the overall attributes of a given scene,\
                  such as its daytime setting (day or night) or weather conditions (sunny or cloudy).\
                  In this example "date" and "comment" are the scene attributes.',
                    code: `{
              ...
              "date": "2025-05-07",
              "comments": "This is a test comment"
              ...
          }`,
                },
                {
                    id: "output-shape-output",
                    displayName: "Shape output",
                    description:
                        'Shape attributes refer to the characteristics of the object being outlined by the shape. \
                  For instance, these attributes might include the color of the object (green or blue) \
                  or its type (car, bicycle, or motorcycle).',
                    code: `{
              ...
              "tags": {
                "object": "color|multiple colors",
                "category": "truck",
                "position": "forward",
                "road side": {
                    "left": "1",
                    "none": "0",
                    "right": "0"
                }
            },
              ...
          }`,
                },
                {
                    id: "output-workspace-output",
                    displayName: "Workspace output",
                    description:
                        'The workspace refers to the canvas on which annotations are created. \
                  Any shapes that are drawn on this canvas represent the output of the workspace. \
                  The workspace can take the form of an "image" or "video." In this particular example, \
                  the workspace is classified as an "image."',
                    code: `{
              ...
              "image": { ... },
              ...
          }`,
                },
            ],
        },
        {
            id: "i-s-d-output-type",
            displayName: "Output type",
            subsections: [
                {
                    id: "o-t-multi-level-menu",
                    displayName: "Multi-level menu",
                    description:
                        'Multi-level menus are a series of hierarchical menus. The\
                          way this hierarchy is translated into a JSON format is with\
                          the "|" character.\
                          In this example, in the output "object" you can see that\
                          "color" is the first level and "multiple colors" is the second level.',
                    code: `{
          ...
          "object": "color|multiple colors",
          ...
      }`,
                },
                {
                    id: "o-t-dropdown",
                    displayName: "Dropdown",
                    description:
                        'The syntax for a dropdown output follows a simple "key":\
                  "value" structure.\
                  In this example, you can find a dropdown under the\
                  "category" tag.',
                    code: `{
          ...
          "category": "truck",
          ...
      }`,
                },
                {
                    id: "o-t-radio-button",
                    displayName: "Radio button",
                    description:
                        'The syntax for a radio button output follows a simple "key":\
                  "value" structure.\
                  In this example, you can find a radio button under the\
                  "position" tag.',
                    code: `{
          ...
          "position": "forward",
          ...
      }`,
                },
                {
                    id: "o-t-checkbox",
                    displayName: "Checkbox",
                    description:
                        'The syntax for a checkboxes output corresponds to\
                  "key": { "option1": "0", "option2": "1" }\
                  Where number 1 indicates the selected option.\
                  You can find checkbox examples under the "road side" tag.',
                    code: `{
          ...
          "road side": {
              "left": "1",
              "none": "0",
              "right": "0"
          }
          ...
      }`,
                },
                {
                    id: "o-t-date",
                    displayName: "Date",
                    description: "Date output follows standard date syntax",
                    code: `{
          ...
          "output_date": "2025-05-07",
          ...
      }`,
                },
                {
                    id: "o-t-text-area",
                    displayName: "Text area",
                    description:
                        'The syntax for a text area output follows a simple "key":\
                  "value" structure, where the key can be a paragraph.',
                    code: `{
          ...
          "output_comments": "This is a test comment",
          ...
      }`,
                },
            ],
        },

        {
            id: "i-s-d-shape",
            displayName: "Shapes",
            description: "",
            subsections: [
                {
                    id: "shape-slider-rectangle",
                    displayName: "Slider-rectangle",
                    description:
                        "A slide rectangle is a shape composed of five points.\
                  Four coordinates are used to delimit the rectangle and\
                  the other vertex corresponds to a line, used to locate\
                  the depths of the object enclosing the rectangle\
                  <br>For more information check the documentation:\
                  https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#slider-rectangle-8",
                    code: `{
          ...
          "type":"slider_rectangle",
          "index":1,
          "points":[
              [
                  2293,
                  1650
              ],
              [
                  2466,
                  1650
              ],
              [
                  2293,
                  1845
              ],
              [
                  2466,
                  1845
              ],
              [
                  2319,
                  1650
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-arrow",
                    displayName: "Arrow",
                    description:
                        "An arrow is a shape composed of two coordinates. One\
                  determines the starting point and the other one determines\
                  the ending point.\
                  <br>For more information check the documentation:\
                  https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#arrow-5",
                    code: `{
          ...
          "type": "arrow",
          "index": 2,
          "points": [
              [
                  926,
                  1147
              ],
              [
                  2929,
                  1071
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-cuboid",
                    displayName: "Cuboid",
                    description:
                        "A cuboid corresponds to two sets of points: points and key points\
                  key points denote the horizon, depth, and height of the cube.\
                  points denote front face and back face corners\
                  <br>For more information check the documentation:\
                  https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#cuboid-12",
                    code: `{
          ...
          "type": "cuboid",
          "index": 3,
          "points": [
              [
                  1465,
                  1826
              ],
              [
                  1465,
                  1667
              ],
              [
                  1315,
                  1823
              ],
              [
                  1315.0,
                  1667.0
              ],
              [
                  1529,
                  1797
              ],
              [
                  1529.0,
                  1667.0
              ],
              [
                  1404.94427244582,
                  1794.987616099071
              ],
              [
                  1404.94427244582,
                  1667.0
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-point",
                    displayName: "Point",
                    description:
                        "An arrow is a shape composed of two coordinates. One\
                  determines the starting point and the other one determines\
                  the ending point.\
                  <br>For more information check the documentation:\
                  https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#point-1",
                    code: `{
          ...
          "type": "point",
          "index": 4,
          "points": [
              [
                  1153,
                  1600
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-line",
                    displayName: "Line",
                    description:
                        "A line corresponds to a list of any number of points.\
                  <br>For more information check the documentation:\
                  https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#line-3",
                    code: `{
          ...
          "type": "line",
          "index": 7,
          "points": [
              [
                  2371,
                  2093
              ],
              [
                  1989,
                  2443
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-rectangle",
                    displayName: "Rectangle",
                    description:
                        "A rectangle is a shape composed of four coordinates in the following structure\
                [[x1,y1], [x1, y2], [x2, y1], [x2,y2]]\
                <br>For more information check the documentation: https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#rectangle-7",
                    code: `{
          ...
          "type": "rectangle",
          "index": 9,
          "points": [
              [
                  2869,
                  7
              ],
              [
                  3263,
                  7
              ],
              [
                  2869,
                  674
              ],
              [
                  3263,
                  674
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-keypoint",
                    displayName: "Keypoint",
                    description:
                        "Keypoints correspond to a list of points and the number of these points depends on the shape configuration.\
                <br>For more information check the documentation: https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#keypoint-14",
                    code: `{
          ...
          "type": "keypoint_shape",
          "index": 10,
          "points": [
              [
                  2705,
                  1746
              ],
              [
                  2699,
                  1801
              ],
              [
                  2606,
                  1921
              ],
              [
                  2784,
                  1920
              ],
              [
                  2694,
                  1952
              ],
              [
                  2671,
                  2104
              ],
              [
                  2729,
                  2107
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-polygon",
                    displayName: "Polygon",
                    description:
                        "A polygon is a shape composed of any number of points, depending on the shape complexity.\
                <br>For more information check the documentation:https://sama.helpjuice.com/en_US/instance-segmentation/annotation-tools_vector?draft=true#polygon-9",
                    code: `{
          ...
          "type": "polygon",
          "index": 12,
          "points": [
              [
                  1982,
                  1788
              ],
              [
                  1976,
                  1789
              ],
              [
                  1977,
                  1801
              ],
              [
                  1974,
                  1803
              ],
              [
                  1972,
                  1805
              ],
              [
                  1969,
                  1815
              ],
              [
                  1968,
                  1825
              ],
              [
                  1968,
                  1836
              ],
              [
                  1970,
                  1849
              ],
              [
                  1974,
                  1853
              ],
              [
                  1979,
                  1854
              ],
              [
                  1983,
                  1853
              ],
              [
                  1985,
                  1847
              ],
              [
                  1985,
                  1825
              ],
              [
                  1989,
                  1826
              ],
              [
                  1993,
                  1832
              ],
              [
                  1999,
                  1845
              ],
              [
                  2009,
                  1846
              ],
              [
                  2012,
                  1837
              ],
              [
                  2009,
                  1804
              ],
              [
                  2004,
                  1795
              ],
              [
                  1988,
                  1791
              ],
              [
                  1981,
                  1788
              ]
          ]
          ...
      }`,
                },
                {
                    id: "shape-points",
                    displayName: "Points",
                    description:
                        "Points correspond to a list of ordered pairs for a specific shape.",
                    code: `{
          ...
          "points": [
            [
                926,
                1147
            ],
            [
                2929,
                1071
            ]
        ]
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
                {
                    id: "shape-tags",
                    displayName: "Tags",
                    description: "Tags are attributes used to describe a shape.",
                    code: `{
          ...
          "tags": {
            "object": "color|multiple colors",
            "category": "bridge",
            "position": "forward",
            "road side": {
                "left": "0",
                "none": "1",
                "right": "0"
            }
          ...
      }`,
                },
            ],
        },
        {
            id: "i-s-d-layers",
            displayName: "Layers",
            description:
                "Corresponds to the main part of an output. It contains the annotation information.",
            code: `{
                ...
                "layers": {...}
                ...
            }`,
        },
        {
            id: "i-s-d-vector-tagging",
            displayName: "Vector Tagging",
            description:
                'All vector annotations have a vector_tagging layer, that contains all the shapes.',
            code: `{
                ...
                "vector_tagging"": {...}
                ...
            }`,
        },
        {
            id: "i-s-d-id-by-step",
            displayName: "Id by step",
            description:
                'This is the Step Name and the Agent ID that worked on it.',
            code: `{
                ...
                "submitter_ids_by_step": {
                    "Step A": 13204
                },
                ...
            }`,
        },
        {
            id: "i-s-d-extras",
            displayName: "Extras",
            description:
                'This is the Step Name and the Agent ID that worked on it.',
            code: `{
                ...
                "_extras": {
                    "keypoint_options": {
                        "image": {
                            "classes": {
                                "body": {
                                    "points": [
                                        "0",
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6"
                                    ],
                                    "connections": [
                                        {
                                            "from": "0",
                                            "to": "1"
                                        },
                                        {
                                            "from": "1",
                                            "to": "2"
                                        },
                                        {
                                            "from": "1",
                                            "to": "3"
                                        },
                                        {
                                            "from": "1",
                                            "to": "4"
                                        },
                                        {
                                            "from": "4",
                                            "to": "5"
                                        },
                                        {
                                            "from": "4",
                                            "to": "6"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        ]
    }`,
        },
    ],
    fullJson: `[
        {
            "id": "63d842aa26571a7ea08dff43",
            "project_id": 13455,
            "created_at": "2023-01-30T22:23:33.712Z",
            "delivered_at": null,
            "state": "completed",
            "data": {
                "image Original url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/Assets/IMG_2299.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAYVR7GFDQFIPOHDU5%2F20230131%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20230131T230534Z\u0026X-Amz-Expires=14400\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=76ef5638b7859cc8cd4f04699ead20c771c3f3fb333b1c1b46c3c8905eebe441",
                "image Original file name": "IMG_2299.JPG",
                "image Size": "1452322",
                "image Height": "2448",
                "image Width": "3264",
                "url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/Assets/IMG_2299.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAYVR7GFDQFIPOHDU5%2F20230131%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20230131T230534Z\u0026X-Amz-Expires=14400\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=76ef5638b7859cc8cd4f04699ead20c771c3f3fb333b1c1b46c3c8905eebe441",
                "name": "Jones Bridge"
            },
            "answers": {
                "image": {
                    "layers": {
                        "vector_tagging": [
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "truck",
                                            "position": "forward",
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        },
                                        "type": "slider_rectangle",
                                        "index": 1,
                                        "points": [
                                            [
                                                2293,
                                                1650
                                            ],
                                            [
                                                2466,
                                                1650
                                            ],
                                            [
                                                2293,
                                                1845
                                            ],
                                            [
                                                2466,
                                                1845
                                            ],
                                            [
                                                2319,
                                                1650
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "bridge",
                                            "position": "forward",
                                            "road side": {
                                                "left": "0",
                                                "none": "1",
                                                "right": "0"
                                            }
                                        },
                                        "type": "arrow",
                                        "index": 2,
                                        "points": [
                                            [
                                                926,
                                                1147
                                            ],
                                            [
                                                2929,
                                                1071
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "car",
                                            "position": "forward",
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        },
                                        "type": "cuboid",
                                        "index": 3,
                                        "points": [
                                            [
                                                1465,
                                                1826
                                            ],
                                            [
                                                1465,
                                                1667
                                            ],
                                            [
                                                1315,
                                                1823
                                            ],
                                            [
                                                1315.0,
                                                1667.0
                                            ],
                                            [
                                                1529,
                                                1797
                                            ],
                                            [
                                                1529.0,
                                                1667.0
                                            ],
                                            [
                                                1404.94427244582,
                                                1794.987616099071
                                            ],
                                            [
                                                1404.94427244582,
                                                1667.0
                                            ]
                                        ],
                                        "key_points": [
                                            [
                                                1343,
                                                1667
                                            ],
                                            [
                                                1315,
                                                1823
                                            ],
                                            [
                                                1465,
                                                1826
                                            ],
                                            [
                                                1529,
                                                1797
                                            ],
                                            [
                                                1465,
                                                1667
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "quality|blur",
                                            "category": "tree",
                                            "position": "none",
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        },
                                        "type": "point",
                                        "index": 4,
                                        "points": [
                                            [
                                                1153,
                                                1600
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "side walk",
                                            "position": "none",
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        },
                                        "type": "line",
                                        "index": 7,
                                        "points": [
                                            [
                                                2371,
                                                2093
                                            ],
                                            [
                                                1989,
                                                2443
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "advertisement",
                                            "position": "forward",
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        },
                                        "type": "rectangle",
                                        "index": 9,
                                        "points": [
                                            [
                                                2869,
                                                7
                                            ],
                                            [
                                                3263,
                                                7
                                            ],
                                            [
                                                2869,
                                                674
                                            ],
                                            [
                                                3263,
                                                674
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "tree",
                                            "position": "forward",
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            },
                                            "keypoint_class": "body"
                                        },
                                        "type": "keypoint_shape",
                                        "index": 10,
                                        "points": [
                                            [
                                                2705,
                                                1746
                                            ],
                                            [
                                                2699,
                                                1801
                                            ],
                                            [
                                                2606,
                                                1921
                                            ],
                                            [
                                                2784,
                                                1920
                                            ],
                                            [
                                                2694,
                                                1952
                                            ],
                                            [
                                                2671,
                                                2104
                                            ],
                                            [
                                                2729,
                                                2107
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            },
                            {
                                "shapes": [
                                    {
                                        "tags": {
                                            "object": "color|multiple colors",
                                            "category": "bike",
                                            "position": "forward"
                                        },
                                        "type": "polygon",
                                        "index": 12,
                                        "points": [
                                            [
                                                1982,
                                                1788
                                            ],
                                            [
                                                1976,
                                                1789
                                            ],
                                            [
                                                1977,
                                                1801
                                            ],
                                            [
                                                1974,
                                                1803
                                            ],
                                            [
                                                1972,
                                                1805
                                            ],
                                            [
                                                1969,
                                                1815
                                            ],
                                            [
                                                1968,
                                                1825
                                            ],
                                            [
                                                1968,
                                                1836
                                            ],
                                            [
                                                1970,
                                                1849
                                            ],
                                            [
                                                1974,
                                                1853
                                            ],
                                            [
                                                1979,
                                                1854
                                            ],
                                            [
                                                1983,
                                                1853
                                            ],
                                            [
                                                1985,
                                                1847
                                            ],
                                            [
                                                1985,
                                                1825
                                            ],
                                            [
                                                1989,
                                                1826
                                            ],
                                            [
                                                1993,
                                                1832
                                            ],
                                            [
                                                1999,
                                                1845
                                            ],
                                            [
                                                2009,
                                                1846
                                            ],
                                            [
                                                2012,
                                                1837
                                            ],
                                            [
                                                2009,
                                                1804
                                            ],
                                            [
                                                2004,
                                                1795
                                            ],
                                            [
                                                1988,
                                                1791
                                            ],
                                            [
                                                1981,
                                                1788
                                            ]
                                        ]
                                    }
                                ],
                                "group_type": null
                            }
                        ]
                    }
                },
                "date": "2025-05-07",
                "comments": "This is a test comment"
            },
            "submitter_ids_by_step": {
                "Step A": 13204
            },
            "_extras": {
                "keypoint_options": {
                    "image": {
                        "classes": {
                            "body": {
                                "points": [
                                    "0",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6"
                                ],
                                "connections": [
                                    {
                                        "from": "0",
                                        "to": "1"
                                    },
                                    {
                                        "from": "1",
                                        "to": "2"
                                    },
                                    {
                                        "from": "1",
                                        "to": "3"
                                    },
                                    {
                                        "from": "1",
                                        "to": "4"
                                    },
                                    {
                                        "from": "4",
                                        "to": "5"
                                    },
                                    {
                                        "from": "4",
                                        "to": "6"
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    ]`,
}
