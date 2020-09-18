import React, { useState } from 'react';
import CreateReleaseForm from '../CreateReleaseForm/CreateReleaseForm';
import ReleaseComponent from '../ReleaseComponent/ReleaseComponent';
import './ReleaseContainer.css';

export default function ReleaseContainer() {
    const [releases, setReleases] = useState([])

    return (
        <div className="releaseContainer">
            <div className="tableWrap">
                <table className="tableBodyScroll">
                    <thead>
                        <tr className="tableHead">
                            <th>{" "}</th>
                            <th>Version</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Start date</th>
                            <th>Release date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            releases.map((release, index) => (
                                <ReleaseComponent
                                    setReleases={setReleases}
                                    releases={releases}
                                    release={release}
                                    index={index}
                                    key={index}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <CreateReleaseForm setReleases={setReleases} releases={releases} />

        </div>
    )
}
