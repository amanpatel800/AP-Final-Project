var config = {
    // the sytle map is a custom map developed in MapBox Studio
    style: 'mapbox://styles/amanpatel800/clvx0c97k06xw01ph2bjf86ys/draft',
    accessToken: 'pk.eyJ1IjoiYW1hbnBhdGVsODAwIiwiYSI6ImNsdXVmZWJ5MzA5MmcybG1yY2V3eTMyZDMifQ.A_5kQPFLvNojfE_f8E5nWg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    // I turned the inset map off since the focus is New York City, rather than a larger area
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    // title of the webpage and the subtitles developed in the segment below
    title: 'A Brief Introduction to the City of Yes for Economic Opportunity',
    subtitle: 'New York City zoning, its impacts, and the upcoming changes',
    byline: 'Aman Patel',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.<br>City of Yes Information from <a href="https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-economic-opportunity.page">NYC Planning</a><br>GeoJSON data source from <a href="https://opendata.cityofnewyork.us/">NYC Open Data</a><br>SPARC Information from <a href="https://edc.nyc/project/sparc-kips-bay">NYCEDC</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'What is zoning, and why does it matter?',
            image: './images/intro.png',
            description: 'In New York City, zoning was first established in 1916 through the Zoning Resolution to help regulate areas of land based on uses, location, and other related features. The city government chose to establish zoning districts in reaction to taller buildings limiting sunlight, a housing crisis, and changes in how we work and live. This resolution was updated several times throughout the last 100 years or so. Still, the City of Yes for Economic Opportunity seeks to alter the resolution for much the same reasons drastically it was first established. The policy includes 18 proposals with several changes to the current zoning code. Continue scrolling to a brief introduction to the proposed amendments.',
            location: {
                center: [-73.935242, 40.730610],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'content1',
            alignment: 'right',
            hidden: false,
            title: 'Our City Today',
            description: 'Today, the city has several different classifications for its zoning. There are commercial, residential, and manufacturing zones, special districts, sub-districts, and many more types and categories of zones. <br> <br> The map provides an overview. <br> <br> Blue zones indicate a generic commercial, manufacturing, or residential zone. Purple displays where special districts are located. These special districts are unique areas of the city that require their own categories, such as the Special Midtown District.',
            location: {
                center: [-73.97940, 40.75618],
                zoom: 12,
                pitch: 50,
                bearing: 0.00
                //nusure why the map is spinning when this is set to 0 
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            // below, and throughout this code, we will see segments to call different layers from the mapbox studio map. The readme file has descriptions of each of the layers within the style. 
            onChapterEnter: [
                {
                    layer: 'sub-districts',
                    opacity: 1,
                },
                {
                    layer: 'special-districts',
                    opacity: 0.5,
                },
                {
                    layer: 'zoning',
                    opacity: 0.25,
                },
                {
                    layer: 'commerical',
                    opacity: 0.25,
                },
                {
                    layer: 'height',
                    opacity: 0.25,
                },
            ],
            // this exit code is important to ensure that the layers do not show when they are not needed and helps keep the map from being to disorganized.
            onChapterExit: [
                {
                    layer: 'sub-districts',
                    opacity: 0,
                },
                {
                    layer: 'special-districts',
                    opacity: 0,
                },
                {
                    layer: 'zoning',
                    opacity: 0,
                },
                {
                    layer: 'commerical',
                    opacity: 0,
                },
                {
                    layer: 'height',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'content2',
            alignment: 'left',
            hidden: false,
            title: 'Special Subdistricts',
            description: 'The black outlines on the map represent special subdistricts; these are districts that exist within special districts, such as the Fifth Avenue Special District which is located within the Special Midtown District. This hierarchical structure adds another layer of complexity to the zoning system.',
            location: {
                center: [-73.97816, 40.75742],
                zoom: 13.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fifth',
                    opacity: 1,
                },
                {
                    layer: 'midtown',
                    opacity: 0.5,
                },
            ],
            onChapterExit: [
                {
                    layer: 'fifth',
                    opacity: 0,
                },
                {
                    layer: 'midtown',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'content3',
            alignment: 'left',
            hidden: false,
            title: 'Planned Changes',
            description: 'The zoning code is constantly amended, altered, and updated. The map displays all areas of the city where there is a current proposal to update the zoning code. Of course, most of these changes are not from the City of Yes proposal but rather from many proposals for many different projects throughout the city. <br><br> As you can see, most of the map has a proposed change!',
            location: {
                center: [-73.97816, 40.75742],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amends',
                    opacity: 0.5,
                },
            ],
            onChapterExit: [
                {
                    layer: 'amends',
                    opacity: 0.0,
                },
            ]
        },
        {
            id: 'content4',
            alignment: 'center',
            hidden: false,
            title: 'Getting into the Proposal',
            description: 'With a foundational understanding of zoning in New York City, we can return to the City of Yes for Economic Opportunity. The proposal aims to achieve four different goals: <br><br><b>Goal 1: Make it easier for businesses to find space and grow. <br>Goal 2: Boost growing industries.<br> Goal 3: Enable more business-friendly streetscapes. <br>Goal 4: Create opportunities for businesses to open.<b><br><br> The plan outlines 18 different potential recommendations to achieve these goals. In the remainder of this webpage, we will explore a few of the key recommendations.',
            location: {
                center: [-73.97816, 40.75742],
                zoom: 10,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'content5',
            alignment: 'right',
            hidden: false,
            title: 'Improving Quality of Life',
            description: 'Many of the goals mentioned above aim to improve business and their processes. New Yorkers love their deliveries and consume lots of goods, requiring vast amounts of truck deliveries over the bridges and through the tunnels. The blue lines throughout the map display all of the truck routes within and coming into the city. The City of Yes aims to improve road safety, reduce pollution, and alter how New Yorkers receive their shipments. <br><br> the City of Yes will alter the zoning code, specifically it will alter Use Group 9 in commercial zones to allow for micro-distribution. Micro-distribution facilities will allow for bike-based deliveries and reduce truck traffic throughout the city.',
            location: {
                center: [-73.97816, 40.75742],
                zoom: 12.5,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trucks',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'trucks',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'content6',
            alignment: 'left',
            hidden: false,
            title: 'Modernizing the Code',
            description: 'As we talked about earlier, the zoning code and many of its classifications are significantly outdated. For example, the code discussed older industries such as mills and lumber yards; the updates would incorporate new industries such as life sciences. Without these updates, plans such as the SPARC plan, which aims to invest $1.6 billion in public funding and over $2 billion in private funding into Kips Bay for a new, state-of-the-art center for life science research, would not be possible. <br><br> As our world changes and the wants and needs of residents adapt and evolve, it is vital our city planning follows suit.',
            location: {
                center: [-73.97677, 40.74166],
                zoom: 14,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kipsbay',
                    opacity: .25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'kipsbay',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'content7',
            alignment: 'right',
            hidden: false,
            title: 'A Post-Pandemic World',
            description: 'As the city exists during the pandemic recovery period, our city planning and design must take into account the new world in which we operate and live. Before the pandemic, we designed around the idea of Central Business Districts, such as the Financial District or the Midtown Special District; with work from home, fewer in-person office commutes, and more diverse types of work and life, the idea of a Central Business District is slowly going away. Office space and its usage is declining. City of Yes for Economic Opportunity aims to recenter city design towards the idea of work and living throughout the city rather than in concentrated city centers. The proposal seeks to allow businesses, offices, and housing to spread out throughout the city. We want to work, live, and play in our neighborhoods. <br><br> This will affect the way transit is also developed. As you can see, the subway is aimed at bringing workers into central business districts and taking them home. This will all slowly start to change with the introduction of new lines such as the Inter Bourgh Express.',
            location: {
                center: [-74.00944, 40.70875],
                zoom: 14,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-subway-blue',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-oranage',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-red',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-yellow',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-L',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-G',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-green',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-brown',
                    opacity: 1,
                },
                {
                    layer: 'nyc-subway-7',
                    opacity: 1,
                },
                {
                    layer: 'fidi',
                    opacity: .25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'nyc-subway-blue',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-oranage',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-red',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-yellow',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-L',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-G',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-green',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-brown',
                    opacity: 0,
                },
                {
                    layer: 'nyc-subway-7',
                    opacity: 0,
                },
                {
                    layer: 'fidi',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'content8',
            alignment: 'center',
            hidden: false,
            title: 'What is NOT Happening',
            description: 'The final point of the City of Yes for Economic Opportunity I would like to highlight is what this proposal is not trying to achieve. As we know, housing and its limited supply is a critical issue the city must solve as we move towards a post-covid world. The Mayor has other proposals, such as the City of Yes for Housing Opportunity, aimed at solving this crisis.<br><br> I hope you were able to learn a bit about zoning throughout our city and the upcoming changes! For more information and sources, please refer to the bottom of this webpage. Thank you!',
            location: {
                center: [-73.935242, 40.730610],
                zoom: 10,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
