var s_s_creation_data = {
    cardImg: "https://sama-documentation-assets.s3.amazonaws.com/Recipes/recipes-header-pink.png",
    title: "Semantic Segmentation JSON-creation",
    description: "This JSON corresponds to the creation format, which means that this is the structure used to create tasks in the Sama Platform",
    steps: [
        {
            id: "s-s-c-description",
            displayName: "Description",
            description:
                "This JSON corresponds to the creation format, which means that this is the structure\
                used to create tasks in the Sama Platform",
        },
        {
            id: "s-s-c-data",
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
         {
            "image Original url": "https://sama-client-assets.s3.amazonaws.com/doc-tutorial/Image%20Annotation/teddy-bear.jpg",
            "image Original file name": "teddy-bear.jpg",
            "image Size": "2462630",
            "image Height": "4000",
            "image Width": "6000",
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
              "url": "https://sama-client-assets.s3.amazonaws.com/doc-tutorial/Image%20Annotation/teddy-bear.jpg",
              "name": "Teddy Bear",
              ...
          }  
      }`,
                },
            ],
        },
        {
            id: "s-s-c-output",
            displayName: "Output",
            subsections: [
                {
                    id: "output-scene",
                    displayName: "Scene output",
                    description:
                        'Scene outputs correspond to the whole workspace.\
                        In this example, "timeofday" and "image" plus the prefix "output_" correspond to scene outputs',
                    code: `{
          ...
          {
            "output_image quality": "clear",
            "output_scene": "house | bed room",
            "output_image light": {
                "dark": "0",
                "bright": "1"
            },
            "output_comments": "Test Comment",
            "output_date": "2030-03-03",
            ...
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
                          the workspace is classified as an "image."',
                    code: `{
          ...
          {
            ...
            "output_image": {
                "layers": {
                    "raster_coding": {
                        "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                    }
                }
          }
          ...
      }`,
                }
            ],
        },
        {
            id: "s-s-c-layers",
            displayName: "Layers",
            description:
                'Corresponds to the main part of an output. It contains the annotation information.',
            code: `{
                "layers": {
                    "raster_coding": {
                        "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                    }
                }
                ...
            }`
        },
        {
            id: "s-s-c-raster-coding",
            displayName: "Raster coding",
            description:
                "All rater annotations have a raster_coding layer, that contains the mask url",
            code: `{
                ...
                "raster_coding": {...}
                ...
            }`,
        },
        {
            id: "s-s-c-mask-url",
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
        [
            {
                "priority": 0,
                "data": {
                    "image Original url": "https://sama-client-assets.s3.amazonaws.com/doc-tutorial/Image%20Annotation/teddy-bear.jpg",
                    "image Original file name": "teddy-bear.jpg",
                    "image Size": "2462630",
                    "image Height": "4000",
                    "image Width": "6000",
                    "url": "https://sama-client-assets.s3.amazonaws.com/doc-tutorial/Image%20Annotation/teddy-bear.jpg",
                    "name": "Teddy Bear",
                    "output_image quality": "clear",
                    "output_scene": "house | bed room",
                    "output_image light": {
                        "dark": "0",
                        "bright": "1"
                    },
                    "output_comments": "Test Comment",
                    "output_date": "2030-03-03",
                    "output_image": {
                        "layers": {
                            "raster_coding": {
                                "mask_url": "https://samahub3.s3.amazonaws.com/clients/23/external/projects/13470/tasks/63f7d35730412f0057220a64/outputs/image/d339fa97-29ef-48de-9ab1-1708f73312e2.png"
                            }
                        }
                    },
                    "output_timeofday": "daytime"
                }
            }
        ]`,
};