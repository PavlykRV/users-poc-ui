import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

export const routes = [
  {
    id: 'cameras-and-locations',
    path: '',
    label: 'Cameras & Locations',
    icon: RoomOutlinedIcon,
    subRoutes: [
      {
        id: 'cameras-management',
        path: '/cameras',
        label: 'Cameras',
      },
      {
        id: 'locations-management',
        path: '/locations',
        label: 'Locations',
      },
    ],
  },
  {
    id: 'users-management',
    path: '/users',
    label: 'User management',
    icon: RoomOutlinedIcon,
  },
  {
    id: 'cameras-settings',
    path: '',
    label: 'Camera settings',
    icon: RoomOutlinedIcon,
    subRoutes: [
      {
        id: 'lens-rectification',
        path: 'lens-rectification',
        label: 'Lens Rectification',
      },
      {
        id: 'plane-and-normal',
        path: '/plane-and-normal',
        label: 'Plane and Normal',
      },
      {
        id: 'detection-polygon',
        path: '/detection-polygon',
        label: 'Detection Polygon',
      },
      { id: 'aoi-selection', path: '/aoi-selection', label: 'AOI Selection' },
      {
        id: 'object-markers',
        path: '/object-markers',
        label: 'Object Markers',
      },
    ],
  },

  {
    id: 'pipeline-management',
    path: '',
    label: 'Pipeline Management',
    icon: RoomOutlinedIcon,
    subRoutes: [
      {
        id: 'pipeline-status',
        path: '/pipeline-status',
        label: 'Pipeline Status',
      },
      { id: 'pipeline-logs', path: '/pipeline-logs', label: 'Pipeline Logs' },
      {
        id: 'pipeline-configuration',
        path: '/pipeline-configuration',
        label: 'Pipeline Parameter Configuration',
      },
    ],
  },
];
