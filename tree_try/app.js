/**
 * Demo app
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 04/03/15
 */

function MainController() {

    this.data = {
        name: 'ROOT',
        id: 'root',
        children: [
            {
                name: 'Biosafety and Biosecurity',
                id: 'biosafety-and-biosecurity',
                size: 'none',
                description: 'Lead: Ellyn Segal',
                children: [
                
                    {
                        name: 'LAOHP',
                        id: 'laohp',
                        size: 'medium',
                        "user_facing": "yes",
                        description: 'Lab Allergy Occupational Health Program',
                        children:[{name: 'Nancy', id:'nancy', size: 'none', description:'Languages: blah, blah, blah'}]
                    },
                    {
                        name: 'APLAC',
                        id: 'aplac',
                        size: 'medium',
                        "user_facing": "yes",
                        description: 'Module eProtocol',
                        children:[{name: 'Marie', id:'marie', size: 'none', description:'Languages: blah, blah, blah'}]
                    },
                    {
                        name: 'IRB',
                        id: 'irb',
                        size: 'medium',
                        "user_facing": "yes",
                        description: 'Module eProtocol',
                        children:[{name: 'Marie', id:'marie', size: 'none'}]
                    },
                    {
                        name: 'SCRO',
                        id: 'scro',
                        size: 'medium',
                        "user_facing": "yes",
                        description: 'Module eProtocol',
                        children:[{name: 'Marie', id:'marie', size: 'none'}]
                    },
                    {
                        name: 'APB',
                        id: 'apb',
                        size: 'medium',
                        "user_facing": "yes",
                        children:[{name: 'Nancy', id:'nancy', size: 'none'}, {name: 'Simon', id:'simon', size: 'none', description:'Languages: blah, blah, blah'}, {name: 'Jenny', id:'jenny', size: 'none', description:'Languages: blah, blah, blah'}]
                    },
                    {
                        name: 'BioRaft',
                        id: 'bioraft',
                        size: 'xlarge',
                        "user_facing": "yes",
                        description:'Lab inspection, inventory, and compliance tracking',
                        children:[{name: 'Nancy', id:'nancy', size: 'none'}, {name: 'Simon', id:'simon', size: 'none'}, {name: 'Jenny', id:'jenny', size: 'none'}]
                    }
                ]
            },
            {
                name: 'Lab Safety',
                id: 'lab-safety',
                description: 'Lead: Susan Vleck',
                size: 'none',
                children: [
                    {
                        name: 'APB',
                        id: 'apb'
                    },
                    {
                        name: 'BioRaft',
                        id: 'bioraft'
                    },
                    {
                        name: 'ChemTracker 1',
                        id: 'chemtracker1',
                        size: 'large',
                        description: 'Chemical inventory reporting for labs',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Dan', id:'dan', size: 'none', description:'Languages: blah, blah, blah'}]
                    },
                    {
                        name: 'ChemTracker 4',
                        id: 'chemtracker4',
                        size: 'large',
                        description: 'Chemical inventory management',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'GDN',
                        id: 'gdn',
                        size: 'small',
                        description: 'Use for chemical classification process',
                        "user_facing": "no",
                        children:[{name: 'Simon', id:'simon', size: 'none'}]
                    },
                    {
                        name: 'Surplus Chemical',
                        id: 'surplus-chemical',
                        size: 'small',
                        description:'Inventory of surplus chemicals available to campus users',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}]
                    },
                    {
                        name: 'Waste Tag',
                        id: 'waste-tag',
                        size: 'medium',
                        description:'Allows for pickup request of barcoded chemical waste',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Dan', id:'dan', size: 'none'}, {name:'Jenny', id:'jenny', size: 'none'}]
                    },
                    {
                        name: 'Chemical Safety Database',
                        id: 'chemical-safety-database',
                        size: 'medium',
                        description:'Web application to allow quick access to chemical storage and hazards information',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Dan', id:'dan', size: 'none'}]
                    }
                ]
            },
            {
                name: 'Occupational Safety and Health',
                id: 'occupational-safety-and-health',
                size: 'none',
                description:'Lead: Yong Kim',
                children: [
                    {
                        name: 'BioRaft',
                        id: 'bioraft'
                    },
                    {
                        name: 'Serious Injury Form',
                        id: 'serious-injury-form',
                        size: 'small',
                        description: 'Collects information from campus operator',
                        "user_facing": "yes",
                        children:[{name: 'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'Chemical Safety Database',
                        id: 'chemical-safety-database'
                    },
                    {
                        name: 'Asbestos',
                        id: 'asbestos',
                        size: 'medium',
                        "user_facing": "yes",
                        children:[{name: 'Jenny', id:'jenny', size: 'none'}]
                    },
                    {
                        name: 'CardinalReady',
                        id: 'cardinalready',
                        size: 'small',
                        description:'Emergency preparedness information for campus, students, family, faculty, and staff',
                        "user_facing": "yes",
                        children:[{name: 'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'MIE',
                        id: 'mie',
                        size: 'xlarge',
                        description:'Medical records',
                        "user_facing": "yes",
                        children:[{name: 'Jenny', id:'jenny', size: 'none'}]
                    }
                ]
            },
            {
                name: 'Hazardous Materials Management',
                id: 'hazardous-materials-management',
                size: 'none',
                children: [
                    {
                        name: 'Surplus Chemical',
                        id: 'surplus-chemical'
                    },
                    {
                        name: 'Waste Tag',
                        id: 'waste-tag'
                    },
                    {
                        name: 'Chemical Safety Database',
                        id: 'chemical-safety-database'
                    },
                    {
                        name: 'Asbestos',
                        id: 'asbestos'
                    },
                    {
                        name: 'HW Pickup Request',
                        id: 'hw-pickup-request',
                        size: 'medium',
                        description: 'Allows for pickup request of non-barcoded chemical waste',
                        "user_facing": "yes",
                        children:[{name: 'Dan', id:'dan', size: 'none'}, {name: 'Simon', id:'simon', size: 'none'}, {name: 'Jenny', id:'jenny', size: 'none'}]
                    },
                    {
                        name: 'HW Scheduler',
                        id: 'hw-scheduler',
                        size: 'xlarge',
                        "user_facing": "no",
                        description: 'Component of eAM; used for scheduling waste pick up requests',
                        children:[{name:'Jenny', id:'jenny', size: 'none'}]
                    },
                    {
                        name: 'Unbarcoder',
                        id: 'unbarcoder',
                        size: 'small',
                        description: 'Used by hazrdous waste technicians to indicate that they have picked up a waste container from a lab',
                        "user_facing": "no",
                        children:[{name: 'Dan', id:'dan', size: 'none'}, {name: 'Simon', id:'simon', size: 'none'}, {name: 'Jenny', id:'jenny', size: 'none'}]
                    },
                    {
                        name: 'SWEEP',
                        id: 'sweep',
                        size: 'small',
                        "user_facing": "yes",
                        children:[{name:'Nancy', id:'nancy', size: 'none'}]
                    }
                ]
            },
            {
                name: 'Emergency Management',
                id: 'emergency-management',
                size: 'none',
                description:'Lead: Keith Perry',
                children: [
                    {
                        name: 'CardinalReady',
                        id: 'cardinalready'
                    },
                    {
                        name: 'ProtectSU',
                        id: 'protectsu',
                        size: 'small',
                        "user_facing": "yes",
                        description:'Informational site about seismic bracing for labs',
                        children:[{name:'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'AED Tracker',
                        id: 'aed-tracker',
                        size: 'medium',
                        description:'Track the location and health of AED units across campus',
                        "user_facing": "yes",
                        children:[{name:'Simon', id:'simon', size: 'none'}, {name:'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'AED + SUNetID Notifications',
                        id: 'aed-sunetid-notifications',
                        size: 'xsmall',
                        description:'Helps SUFMO with maintaining accurate AED information',
                        "user_facing": "no",
                        children:[{name:'Simon', id:'simon', size: 'none'}]
                    }
                ]
            },
            {
                name: 'SUFMO',
                id: 'sufmo',
                size: 'none',
                description:'Lead: Aaron McCarthy',
                children: [
                    {
                        name: 'AED Tracker',
                        id: 'aed-tracker'
                    },
                    {
                        name: 'AED + SUNetID Notifications',
                        id: 'aed-sunetid-notifications'
                    },
                    {
                        name: 'Fire Plan Tables',
                        id: 'fire-plan-tables',
                        size: 'medium',
                        "user_facing": "no",
                        children:[{name:'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'Fire Tracking Database',
                        id: 'fire-tracking-database',
                        size: 'medium',
                        "user_facing": "no",
                        children:[{name:'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'Manitou',
                        id: 'manitou',
                        size: 'medium',
                        description:'Fire alarm systerm',
                        "user_facing": "no",
                        children:[{name:'TBD', id:'tbd', size: 'none'}]
                    },
                    {
                        name: 'One Step',
                        id: 'one-step',
                        size: 'medium',
                        description: 'Fire Inspection',
                        "user_facing": "no",
                        children:[{name:'TBD', id:'tbd', size: 'none'}]
                    }
                ]
            },
            {
                name: 'Occupational Health Center',
                id: 'occupational-health-center',
                size: 'none',
                description:'Lead: Rich Wittman',
                children: [
                    {
                        name: 'MIE',
                        id: 'mie'
                    }
                ]
            },
            {
                name: 'Health Physics',
                id: 'health-physics',
                size: 'none',
                description: 'Lead: Lance Phillips',
                children: [
                    {
                        name: 'CT Protocol',
                        id: 'ct-protocol',
                        size: 'small',
                        description:'CT (computerized tomography) settings reference for clinics on campus',
                        "user_facing": "yes",
                        children:[{name:'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'Dosimetry',
                        id: 'dosimetry',
                        size: 'medium',
                        "user_facing": "yes",
                        children:[{name:'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'SHP',
                        id: 'shp',
                        size: 'xlarge',
                        description:'Radioisotope inventory management and reporting',
                        "user_facing": "no",
                        children:[{name: 'Dan', id:'dan', size: 'none'}, {name: 'Simon', id:'simon', size: 'none'}, {name: 'Nancy', id:'nancy', size: 'none'}, {name:'Marie',id:'marie', size: 'none'}]
                    }
                ]
            },
            {
                name: 'Operations',
                id: 'operations',
                size: 'none',
                children: [
                    {
                        name: 'Data Viz',
                        id: 'data-viz',
                        size: 'medium',
                        description: 'Helps describe data to leadership to support data-driven business decisions',
                        "user_facing": "no",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'Data Warehouse',
                        id: 'data-warehouse',
                        size: 'xlarge',
                        description:'Aggregates data from many different systems into one place and dta visualization uses this data rather than production database--better security and scalability',
                        "user_facing": "no",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'Machine Learning Training and Research',
                        id: 'machine-learning-training-and-research',
                        size: 'xsmall',
                        "user_facing": "no",
                        description: 'Researching on future automation opportunities',
                        children:[{name: 'Dan', id:'dan', size: 'none'}, {name: 'Simon', id:'simon', size: 'none'}]
                    }
                ]
            },
            {
                name: 'All Departments',
                id: 'all-departments',
                size: 'none',
                children: [
                    {
                        name: 'REDcap',
                        id: 'redcap',
                        size: 'small',
                        description: 'Web form and secure information storage',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}]
                    },
                    {
                        name: 'EH&S Website',
                        id: 'ehs-website',
                        size: 'large',
                        description: 'Reference website for EH&S operations and services',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'Online Training',
                        id: 'online-training',
                        size: 'large',
                        description: 'Web based health and safety training courses for staff, students, and faculty',
                        "user_facing": "yes",
                        children:[{name: 'Marie', id:'marie', size: 'none'}, {name: 'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'Incident Reporting',
                        id: 'incident-reporting',
                        size: 'medium',
                        description:'Collects information about safety incidents on campus and routes information to EH&S Incident response teams',
                        "user_facing": "yes",
                        children:[{name: 'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'Slack Incident Notification',
                        id: 'slack-incident-notification',
                        size: 'xsmall',
                        description:'Provides notifications in Slack when an incident form is submitted',
                        "user_facing": "no",
                        children:[{name: 'Dan', id:'dan', size: 'none'}]
                    },
                    {
                        name: 'eAM',
                        id: 'eam',
                        size: 'xlarge',
                        description:'Asset management application used for scheduling waste pickups and for service request workorders',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Marie', id:'marie', size: 'none'},{name: 'Jenny', id:'jenny', size: 'none'}]
                    },
                    {
                        name: 'Data Sync with Campus',
                        id: 'data-sync-with-campus',
                        size: 'xsmall',
                        description:'Enables our application to have up-to-date person and faculty data for use in our various applications--ChemTracker, Waste Tag, AEDTracker, etc.',
                        "user_facing": "no",
                        children:[{name: 'Nancy', id:'nancy', size: 'none'}]
                    },
                    {
                        name: 'JML',
                        id: 'jml',
                        size: 'medium',
                        description:'Provides data security and access layer between front and back ends',
                        "user_facing": "yes",
                        children:[{name: 'Simon', id:'simon', size: 'none'}, {name: 'Dan', id:'dan', size: 'none'}]
                    }
                ]
            }
            
        ]
    }
}

angular.module('d3-app', ['d3-multi-parent']).controller('MainController', MainController);

