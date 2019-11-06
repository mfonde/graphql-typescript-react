import * as React from 'react';
import {useLaunchListQuery} from '../../generated/graphql';
import LaunchList from './LaunchList';

interface OwnProps {
    handleIdChange: (newId: number) => void;
}

const LaunchListContainer = ({handleIdChange}: OwnProps) => {
    const { data, error, loading } = useLaunchListQuery();

    if(loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} handleIdChange={handleIdChange} />
};

export default LaunchListContainer;