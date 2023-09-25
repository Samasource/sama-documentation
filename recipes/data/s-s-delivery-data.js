var s_s_delivery_data = {
    title: "Semantic Segmentation JSON-delivery",
    description: "Structure containing all details related to the project, submission ans answers.",
    steps: [
        {
            id: "s-s-d-description",
            displayName: "Description",
            description:
                "This JSON corresponds to the delivery format. It is a structure that contains all details\
                 related to the project and the submission. For example, in this JSON you can find the project id \
                  or the creation date and get information related to the steps.\
                <br>Note: You can't use this format to create new tasks in the Sama Platform",
        },
        {
            id: "s-s-d-submision",
            displayName: "Submision",
            subsections: [
                {
                    id: "submision-id",
                    displayName: "Submision id",
                    description:
                        "Corresponds to a unique identifier that addresses a specific submission.\
                         It can be used to find a specific submission",
                    code: `{
          {
              "id": "63f7d35730412f0057220a64",
              ...
          }
      }`,
                },
                {
                    id: "submision-project-id",
                    displayName: "Project id",
                    description:
                        'A unique identifier that specifies which project this submission belongs to',
                    code: `{
          {
              ...
              "project_id": 13470,
              ...
          }  
      }`,
                },
                {
                    id: "submision-dates",
                    displayName: "Submision dates",
                    description:
                        "- created_at tells when the task was created\
                        - delivered_at tells the date when a task was set to deliver.\
                        <br>Setting a task as delivered is a manual process, if don't set this the value is going to be null by default",
                    code: `{
          {
              ...
              "created_at": "2023-02-23T20:59:35.210Z",
              "delivered_at": null,
              ...
          }  
      }`,
                },
                {
                    id: "submision-state",
                    displayName: "Submision state",
                    description:
                        "The submission state can be :\
                        new, in progress, completed, delivered, rejected, approved, acknowledge.\
                        And it tells the state of a specific submission",
                    code: `{
          {
              ...
              "state": "completed",
              ...
          }  
      }`,
                },
                {
                    id: "submision-id-by-step",
                    displayName: "Submision id by step",
                    description:
                        "One task can have multiple steps, this is a unique identifier\
                         that specifies the step to which this annotation belongs",
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
            id: "s-s-d-data",
            displayName: "Data",
            subsections: [
                {
                    id: "data-input-meta-data",
                    displayName: "Input meta-data",
                    description:
                        'The input metadata contains image information such as size, height, and width.\
                        <br>Note: Image metadata will only be available if "Include Image Metadata" is enabled\
                        <br>in project > setting > outputs > Pre-processing settings',
                    code: `{
          ...
          "data": {
            "image Original url": "https://assets.samasource.org/doc-tutorial/Image%20Annotation/teddy-bear.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9hc3NldHMuc2FtYXNvdXJjZS5vcmcvZG9jLXR1dG9yaWFsL0ltYWdlJTIwQW5ub3RhdGlvbi90ZWRkeS1iZWFyLmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NzIwMTkwNH19fV19\u0026Signature=WUHA1rCAaS9QkgA5fxh1FPKLdWozz6lHmnZxAK2Lomb7cloEIARjnn~vXMPob~KqOf~vtOzn26H8pdMTKLxNimEfhZDbakX6nKpGYajYQIZ4dwn-lygg8sPRLhsyd564hXteheV8nmS8MLYT2ZAMYp79NKbD7CidyFDUmdtsASoKkQzSIUJ0UEKZyWyhyVMYjdRuooLOz-ZQmM9bnuKHtHmFeWmbVXhseC5ukBRDjLKOMaIKHK8-ChcxAb7H2ayLRhtBGL2ghaRC-KgYfwQpgG~RC2tqT2VjntCMwiJsNBPOqZ07shBetRmAjuoVMnB0uQ88PPs3kCWqBF3NVPK77A__\u0026Key-Pair-Id=APKAI3VFKBKGZNMXJ2MQ",
            "image Original file name": "teddy-bear.jpg",
            "image Size": "2462630",
            "image Height": "4000",
            "image Width": "6000",
            ...
          }
          ...
      }`,
                },
                {
                    id: "data-input",
                    displayName: "Input",
                    description:
                        'The "data" element lists the inputs as they are defined in the project settings.\
                        In this example, "url" and "name" corresponds to the inputs',
                    code: `{
          ...
          "data": {
            ...
            "url": "https://assets.samasource.org/doc-tutorial/Image%20Annotation/teddy-bear.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9hc3NldHMuc2FtYXNvdXJjZS5vcmcvZG9jLXR1dG9yaWFsL0ltYWdlJTIwQW5ub3RhdGlvbi90ZWRkeS1iZWFyLmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NzIwMTkwNH19fV19\u0026Signature=WUHA1rCAaS9QkgA5fxh1FPKLdWozz6lHmnZxAK2Lomb7cloEIARjnn~vXMPob~KqOf~vtOzn26H8pdMTKLxNimEfhZDbakX6nKpGYajYQIZ4dwn-lygg8sPRLhsyd564hXteheV8nmS8MLYT2ZAMYp79NKbD7CidyFDUmdtsASoKkQzSIUJ0UEKZyWyhyVMYjdRuooLOz-ZQmM9bnuKHtHmFeWmbVXhseC5ukBRDjLKOMaIKHK8-ChcxAb7H2ayLRhtBGL2ghaRC-KgYfwQpgG~RC2tqT2VjntCMwiJsNBPOqZ07shBetRmAjuoVMnB0uQ88PPs3kCWqBF3NVPK77A__\u0026Key-Pair-Id=APKAI3VFKBKGZNMXJ2MQ",
            "name": "Teddy Bear"
          }
          ...
      }`,
                }
            ],
        },
        {
            id: "s-s-d-answer",
            displayName: "Answer",
            description:
                'The "answers" element is where annotation answers are returned.\
                It consists of a dictionary of the outputs defined in the project settings.',
            code: `{
                ...
                "answers": {
                    "image quality": "clear",
                    "scene": "house | bed room",
                    "image light": {
                        "dark": "0",
                        "bright": "1"
                    },
                    "comments": "Test Comment",
                    "date": "2030-03-03",
                    "image": {
                        "layers": {
                            "raster_coding": {
                                "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                            }
                        }
                    },
                ...
            }`
        },
        {
            id: "s-s-d-output",
            displayName: "Output",
            description: "",
            subsections: [
                {
                    id: "output-scene",
                    displayName: "Scene output",
                    description:
                        'Scene outputs correspond to the whole workspace.\
                        In this example, "timeofday" and "image" correspond to scene outputs',
                    code: `{
          ...
          {
            "image quality": "clear",
            "scene": "house | bed room",
            "image light": {
                "dark": "0",
                "bright": "1"
            },
            "comments": "Test Comment",
            "date": "2030-03-03",
            ...
            },
            "timeofday": "daytime"
          ...
      }`,
                },
                {
                    id: "output-workspace",
                    displayName: "Workspace Output",
                    description:
                        'The workspace refers to the canvas on which annotations are created.\
                        Any shapes that are drawn on this canvas represent the output of the workspace.\
                        The workspace can take the form of an "image" or "video." \
                        In this particular example, the workspace is classified as an "image.',
                    code: `{
          ...
          "image": {
            "layers": {
                "raster_coding": {
                    "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                }
            }
        },
          ...
      }`,
                }
            ],
        },
        {
            id: "s-s-d-layers",
            displayName: "Layers",
            description:
                "Corresponds to the main part of an output. It contains the annotation information",
            code: `{
                ...
                "layers": {...}
                ...
            }`,
        },
        {
            id: "s-s-d-raster-cooding",
            displayName: "Raster cooding",
            description:
                "All rater annotations have a raster_coding layer, that contains the mask url",
            code: `{
                ...
                "raster_coding": {...}
                ...
            }`,
        },
        {
            id: "s-s-d-mask-url",
            displayName: "Mask URL",
            description:
                "This url corresponds to the mask that was generated with the annotation.\
                <br>You can refer to: https://sama.helpjuice.com/en_US/semantic-segmentation/annotation-mask",
            code: `{
                ...
                "raster_coding": {
                    "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                }
                ...
            }`,
        },
    ],
    fullJson: `[
        {
            "id": "63f7d35730412f0057220a64",
            "project_id": 13470,
            "created_at": "2023-02-23T20:59:35.210Z",
            "delivered_at": null,
            "state": "completed",
            "data": {
                "image Original url": "https://assets.samasource.org/doc-tutorial/Image%20Annotation/teddy-bear.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9hc3NldHMuc2FtYXNvdXJjZS5vcmcvZG9jLXR1dG9yaWFsL0ltYWdlJTIwQW5ub3RhdGlvbi90ZWRkeS1iZWFyLmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NzIwMTkwNH19fV19\u0026Signature=WUHA1rCAaS9QkgA5fxh1FPKLdWozz6lHmnZxAK2Lomb7cloEIARjnn~vXMPob~KqOf~vtOzn26H8pdMTKLxNimEfhZDbakX6nKpGYajYQIZ4dwn-lygg8sPRLhsyd564hXteheV8nmS8MLYT2ZAMYp79NKbD7CidyFDUmdtsASoKkQzSIUJ0UEKZyWyhyVMYjdRuooLOz-ZQmM9bnuKHtHmFeWmbVXhseC5ukBRDjLKOMaIKHK8-ChcxAb7H2ayLRhtBGL2ghaRC-KgYfwQpgG~RC2tqT2VjntCMwiJsNBPOqZ07shBetRmAjuoVMnB0uQ88PPs3kCWqBF3NVPK77A__\u0026Key-Pair-Id=APKAI3VFKBKGZNMXJ2MQ",
                "image Original file name": "teddy-bear.jpg",
                "image Size": "2462630",
                "image Height": "4000",
                "image Width": "6000",
                "url": "https://assets.samasource.org/doc-tutorial/Image%20Annotation/teddy-bear.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9hc3NldHMuc2FtYXNvdXJjZS5vcmcvZG9jLXR1dG9yaWFsL0ltYWdlJTIwQW5ub3RhdGlvbi90ZWRkeS1iZWFyLmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NzIwMTkwNH19fV19\u0026Signature=WUHA1rCAaS9QkgA5fxh1FPKLdWozz6lHmnZxAK2Lomb7cloEIARjnn~vXMPob~KqOf~vtOzn26H8pdMTKLxNimEfhZDbakX6nKpGYajYQIZ4dwn-lygg8sPRLhsyd564hXteheV8nmS8MLYT2ZAMYp79NKbD7CidyFDUmdtsASoKkQzSIUJ0UEKZyWyhyVMYjdRuooLOz-ZQmM9bnuKHtHmFeWmbVXhseC5ukBRDjLKOMaIKHK8-ChcxAb7H2ayLRhtBGL2ghaRC-KgYfwQpgG~RC2tqT2VjntCMwiJsNBPOqZ07shBetRmAjuoVMnB0uQ88PPs3kCWqBF3NVPK77A__\u0026Key-Pair-Id=APKAI3VFKBKGZNMXJ2MQ",
                "name": "Teddy Bear"
            },
            "answers": {
                "image quality": "clear",
                "scene": "house | bed room",
                "image light": {
                    "dark": "0",
                    "bright": "1"
                },
                "comments": "Test Comment",
                "date": "2030-03-03",
                "image": {
                    "layers": {
                        "raster_coding": {
                            "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                        }
                    }
                },
                "timeofday": "daytime"
            },
            "submitter_ids_by_step": {
                "Step A": 13204
            },
            "_extras": {}
        }
    ]`,
};