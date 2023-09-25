var i_s_video_delivery_data = {
    title: "Video Instance Segmentation JSON-delivery",
    description: "Structure containing all details related to the project, submission and answers.",
    steps: [
        {
            id: "i-s-d-video-description",
            displayName: "Description",
            description:
                "This JSON corresponds to the delivery format. It is a structure that contains all details related to the project and the submission. For example, in this JSON you can find the project id or the creation date and get information related to the steps.\
                Note: You can't use this format to create new tasks in the Sama Platform",
        },
        {
            id: "i-s-d-video-submission",
            displayName: "Submission",
            subsections: [
                {
                    id: "submission-id",
                    displayName: "Submission id",
                    description:
                        'Corresponds to a unique identifier that addresses a specific submission.',
                    code: `{
            {
                ...
                "id": "63e163d9c747fb00a7893bc2",
                ...
            }  
        }`,
                },
                {
                    id: "submission-project-id",
                    displayName: "Submission project id",
                    description:
                        'A unique identifier that specifies which project this submission belongs to',
                    code: `{
          {
              ...
              "project_id": 13481,
              ...
          }  
      }`,
                },
                {
                    id: "submission-dates",
                    displayName: "Submission dates",
                    description:
                        "- created_at tells when the task was created\
                        - delivered_at tells the date when a task was set to deliver. Setting a task as delivered is a manual process,\
                         if don't set this the value is going to be null by default",
                    code: `{
          {
              ...
              "created_at": "2023-02-06T20:37:39.127Z",
              "delivered_at": null,
              ...
          }  
      }`,
                },
                {
                    id: "submission-id-by-step",
                    displayName: "Submission id by step",
                    description:
                        "One task can have multiple steps, this is a unique identifier that specifies the step\
                        to which this annotation belongs",
                    code: `{
          {
              ...
              "submitter_ids_by_step": {
                "Step A": 13204
            },
              ...
          }  
      }`,
                },
            ],
        },
        {
            id: "i-s-d-video-data",
            displayName: "Data",
            subsections: [
                {
                    id: "input-meta-data",
                    displayName: "Input",
                    description:
                        'The "data" element lists the inputs as they are defined in the project settings.\
                        In this example, the inputs correspond to "url" and "name"',
                    code: `{
          ...
        {
            ...
            "url": "https://assets.samasource.com/api/v1/assets/8de15c3c-d358-4794-a846-53b565f167df?access_key=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaDMiLCJhdWQiOiJhc3NldHMiLCJhc3NldF9pZCI6IjhkZTE1YzNjLWQzNTgtNDc5NC1hODQ2LTUzYjU2NWYxNjdkZiIsImV4cCI6MTY3NTczMDI2OX0.TwXAybn-KkmOsMbM8xfGSntRcLSAZ-1j_3eQtSWAV02EcbP-0wMS_CN4lL8zsiSU7BFgEyuqD_GdjvtD-Z3EuHwHMX-6-besCWe6Bah5w6OS4h4e6ISDYMMd45In6eWqRvh7Id0PwDzvbj_Z0YO-zNQ4Ua3I-GLwJXKX61xJU1sXwdzXRzA6EoBhZ1CyMuIaLwMVK5ET9IJ4zn5U-ko6bQ1xt-mUT74aiyloQgggnY1zP1SzwvK7OELEiJcUD9N3WKTwcEogumNPV0hXMBfm7zqUrG5ZeIDYHl2swjR9dzJ-byarj3ojPPY9yLZ9IttY5rcPLDVUPRx6aSnwp68g3w\u0026linkedUrl=https%3A%2F%2Fsamahub3.s3.amazonaws.com%2Fcacheable_client_assets%2Fall%2F23%2Fexternal%2Fprojects%2F13481%2Fuploads%2F612584%2Ftasks%2F63e163d9c747fb00a7893bc2%2Finputs%2Furl%2FNew-York-Street-Short-Video.zip",
            "name": "City"
        }
          
      }`,
                },

            ],
        },
        {
            id: "i-s-d-video-answers",
            displayName: "Answers",
            description:
                'The "answers" element is where annotation answers are returned. It consists of a dictionary of the\
             outputs defined in the project settings.',
            code: `{
                ...
                "answers": {
                    "video" : [
                        "shapes" : []
                    ]
                 }
                    
            ...
        }`,

        },
        {
            id: "i-s-d-video-output",
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
                    id: "output-scene",
                    displayName: "Scene output",
                    description:
                        'Scene outputs correspond to the whole workspace.\
                        In this example, "video", "timeofday" and "date" correspond to scene outputs',
                    code: `{
            {
                "video" : [...]
            }  
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
                {
                    id: "output-shape",
                    displayName: "Shape output",
                    description:
                        'Each shape that is drawn on an image corresponds to a shape output\
                        Shape outputs are also called nested outputs, because they are "nested" inside a workspace output or because they appear as a nested object in the JSON output file.\
                        In this example, "video" has two shape outputs or nested outputs.',
                    code: `{
          {
              ...
              "shapes" : []
              ...
          }  
      }`,
                },
            ],
        },
        {
            id: "s-s-d-output-type",
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
          "object": "color|black and white",
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
          "category": "pedestrian",
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
          "position": "forward"
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
            id: "i-s-d-video-multiple-frames",
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
            id: "i-s-d-video-visibility",
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
            id: "i-s-d-video-frame-number",
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
            "id": "63e163d9c747fb00a7893bc2",
            "project_id": 13481,
            "created_at": "2023-02-06T20:37:39.127Z",
            "delivered_at": null,
            "state": "completed",
            "data": {
                "video Files": "[\"000000.jpg\",\"000001.jpg\",\"000002.jpg\",\"000003.jpg\",\"000004.jpg\",\"000005.jpg\",\"000006.jpg\",\"000007.jpg\",\"000008.jpg\",\"000009.jpg\",\"000010.jpg\",\"000011.jpg\",\"000012.jpg\",\"000013.jpg\",\"000014.jpg\"]",
                "video Original url": "https://sama-documentation-assets.s3.amazonaws.com/doc-tutorial/VideoAnnotations/New-York-Street-Short-Video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAYVR7GFDQFIPOHDU5%2F20230206%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20230206T204355Z\u0026X-Amz-Expires=14400\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=eb7de898102261d56534069bb8f19a46013c980d57a441fb145bc53d88df2946",
                "video Original file name": "New-York-Street-Short-Video.mp4",
                "video Frames per second": "29.97002997002997",
                "video Total frames": "29",
                "video Height": "1080",
                "video Width": "1920",
                "video Duration": "0.531000",
                "url": "https://assets.samasource.com/api/v1/assets/8de15c3c-d358-4794-a846-53b565f167df?access_key=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaDMiLCJhdWQiOiJhc3NldHMiLCJhc3NldF9pZCI6IjhkZTE1YzNjLWQzNTgtNDc5NC1hODQ2LTUzYjU2NWYxNjdkZiIsImV4cCI6MTY3NTczMDI2OX0.TwXAybn-KkmOsMbM8xfGSntRcLSAZ-1j_3eQtSWAV02EcbP-0wMS_CN4lL8zsiSU7BFgEyuqD_GdjvtD-Z3EuHwHMX-6-besCWe6Bah5w6OS4h4e6ISDYMMd45In6eWqRvh7Id0PwDzvbj_Z0YO-zNQ4Ua3I-GLwJXKX61xJU1sXwdzXRzA6EoBhZ1CyMuIaLwMVK5ET9IJ4zn5U-ko6bQ1xt-mUT74aiyloQgggnY1zP1SzwvK7OELEiJcUD9N3WKTwcEogumNPV0hXMBfm7zqUrG5ZeIDYHl2swjR9dzJ-byarj3ojPPY9yLZ9IttY5rcPLDVUPRx6aSnwp68g3w\u0026linkedUrl=https%3A%2F%2Fsamahub3.s3.amazonaws.com%2Fcacheable_client_assets%2Fall%2F23%2Fexternal%2Fprojects%2F13481%2Fuploads%2F612584%2Ftasks%2F63e163d9c747fb00a7893bc2%2Finputs%2Furl%2FNew-York-Street-Short-Video.zip",
                "name": "City"
            },
            "answers": {
                "video": [
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
                                ],
                                "locations": [
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                334,
                                                667
                                            ],
                                            [
                                                473,
                                                667
                                            ],
                                            [
                                                334,
                                                971
                                            ],
                                            [
                                                473,
                                                971
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                331,
                                                666
                                            ],
                                            [
                                                454,
                                                666
                                            ],
                                            [
                                                331,
                                                970
                                            ],
                                            [
                                                454,
                                                970
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                327,
                                                666
                                            ],
                                            [
                                                434,
                                                666
                                            ],
                                            [
                                                327,
                                                970
                                            ],
                                            [
                                                434,
                                                970
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                324,
                                                665
                                            ],
                                            [
                                                415,
                                                665
                                            ],
                                            [
                                                324,
                                                969
                                            ],
                                            [
                                                415,
                                                969
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                299,
                                                664
                                            ],
                                            [
                                                394,
                                                664
                                            ],
                                            [
                                                299,
                                                968
                                            ],
                                            [
                                                394,
                                                968
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                276,
                                                665
                                            ],
                                            [
                                                392,
                                                665
                                            ],
                                            [
                                                276,
                                                969
                                            ],
                                            [
                                                392,
                                                969
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                254,
                                                665
                                            ],
                                            [
                                                390,
                                                665
                                            ],
                                            [
                                                254,
                                                969
                                            ],
                                            [
                                                390,
                                                969
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                231,
                                                666
                                            ],
                                            [
                                                388,
                                                666
                                            ],
                                            [
                                                231,
                                                970
                                            ],
                                            [
                                                388,
                                                970
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                201,
                                                667
                                            ],
                                            [
                                                382,
                                                667
                                            ],
                                            [
                                                201,
                                                971
                                            ],
                                            [
                                                382,
                                                971
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                192,
                                                667
                                            ],
                                            [
                                                379,
                                                667
                                            ],
                                            [
                                                192,
                                                971
                                            ],
                                            [
                                                379,
                                                971
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                184,
                                                668
                                            ],
                                            [
                                                375,
                                                668
                                            ],
                                            [
                                                184,
                                                972
                                            ],
                                            [
                                                375,
                                                972
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "1",
                                                "none": "0",
                                                "right": "0"
                                            }
                                        }
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
                                ],
                                "locations": [
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                                1698,
                                                1070
                                            ],
                                            [
                                                1698,
                                                648
                                            ],
                                            [
                                                1274,
                                                980
                                            ],
                                            [
                                                1274,
                                                649
                                            ],
                                            [
                                                1610,
                                                989
                                            ],
                                            [
                                                1610,
                                                649
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                1281,
                                                1058
                                            ],
                                            [
                                                1281,
                                                649
                                            ],
                                            [
                                                1702,
                                                1071
                                            ],
                                            [
                                                1702,
                                                649
                                            ],
                                            [
                                                1274,
                                                981
                                            ],
                                            [
                                                1274,
                                                649
                                            ],
                                            [
                                                1613,
                                                989
                                            ],
                                            [
                                                1613,
                                                649
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
                                        "points": [
                                            [
                                                1280,
                                                1058
                                            ],
                                            [
                                                1280,
                                                649
                                            ],
                                            [
                                                1707,
                                                1071
                                            ],
                                            [
                                                1707,
                                                649
                                            ],
                                            [
                                                1273,
                                                981
                                            ],
                                            [
                                                1273,
                                                649
                                            ],
                                            [
                                                1617,
                                                990
                                            ],
                                            [
                                                1617,
                                                649
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                                1711,
                                                650
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273,
                                                650
                                            ],
                                            [
                                                1621,
                                                990
                                            ],
                                            [
                                                1621,
                                                650
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                                1715,
                                                1072
                                            ],
                                            [
                                                1715,
                                                650
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273,
                                                650
                                            ],
                                            [
                                                1624,
                                                991
                                            ],
                                            [
                                                1624,
                                                650
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                                1714,
                                                1072
                                            ],
                                            [
                                                1714,
                                                650
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273,
                                                650
                                            ],
                                            [
                                                1623,
                                                991
                                            ],
                                            [
                                                1623,
                                                650
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                                1713,
                                                1072
                                            ],
                                            [
                                                1713,
                                                650
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273,
                                                650
                                            ],
                                            [
                                                1622,
                                                991
                                            ],
                                            [
                                                1622,
                                                650
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                                1712,
                                                1072
                                            ],
                                            [
                                                1712,
                                                650
                                            ],
                                            [
                                                1273,
                                                982
                                            ],
                                            [
                                                1273,
                                                650
                                            ],
                                            [
                                                1621,
                                                991
                                            ],
                                            [
                                                1621,
                                                650
                                            ]
                                        ],
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
                                    },
                                    {
                                        "visibility": 1,
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
                                        "tags": {
                                            "road side": {
                                                "left": "0",
                                                "none": "0",
                                                "right": "1"
                                            }
                                        }
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
            },
            "submitter_ids_by_step": {
                "Step A": 13204
            },
            "_extras": {}
        }
    ]`,
};