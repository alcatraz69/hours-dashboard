import React from 'react'
import { Grid } from '@mui/material'
import { ProjCardWrapper } from './styles';
import { ProjectCardProps } from './types';

const ProjectCard = ({item} : ProjectCardProps) => {
  return (
    <ProjCardWrapper container direction='column'>
        <Grid item container>
            {item.icon}
        </Grid>
        <Grid item container justifyContent='center'>
            <h1>{item.value}</h1>
        </Grid>
        <Grid item container justifyContent='center'>
            {item.label}
        </Grid>
    </ProjCardWrapper>
  )
}

export default ProjectCard