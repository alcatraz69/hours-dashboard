import React from 'react'
import GridIcon from '@mui/icons-material/GridViewOutlined';
import TaskIcon from '@mui/icons-material/TaskAltRounded';
import OngoingIcon from '@mui/icons-material/CachedOutlined';
import DangerIcon from '@mui/icons-material/WarningAmberRounded';
import EmployeesIcon from '@mui/icons-material/PeopleAltOutlined';
import { ProjectCardItems } from '../../components/ProjectCard/types';

export const ProjectsDetails:ProjectCardItems[] = [
    {
        label: 'Total Projects',
        value: '5',
        icon: <GridIcon sx={{ color: "#00CCC8" }}/>
    },
    {
        label: 'Completed',
        value: '1',
        icon: <TaskIcon sx={{ color: "#00CCC8" }}/>
    },
    {
        label: 'Ongoing',
        value: '3',
        icon: <OngoingIcon sx={{ color: "#00CCC8" }}/>
    },
    {
        label: 'Delayed',
        value: '1',
        icon: <DangerIcon sx={{ color: "#00CCC8" }}/>
    },
    {
        label: 'Employees',
        value: '5',
        icon: <EmployeesIcon sx={{ color: "#00CCC8" }}/>
    },
]