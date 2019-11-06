import * as React from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: LaunchProfileQuery
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>No launch available</div>
    }

    return (
        <div className={className}>
            <div className={`${className}_status`}>
                <span>Flight {data.launch.flight_number}: </span>
                {data.launch.launch_success ? (
                    <span className={`${className}_success`}>Success</span>
                ) : (
                    <span className={`${className}_failed`}>Failed</span>
                )}
            </div>
            <h1 className={`${className}_title`}>
                {data.launch.mission_name}
                {data.launch.rocket &&
                `(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
            </h1>
        </div>
    )
}

export default LaunchProfile;