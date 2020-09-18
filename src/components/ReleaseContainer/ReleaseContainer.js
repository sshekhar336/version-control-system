import React, { useState } from 'react';
import CreateReleaseForm from '../CreateReleaseForm/CreateReleaseForm';
import ReleaseComponent from '../ReleaseComponent/ReleaseComponent';
import './ReleaseContainer.css';

export default function ReleaseContainer() {
    const [releases, setReleases] = useState([
        {
            versionName: "Version1",
            startDate: "2020-09-01",
            releaseDate: "2020-09-02",
            description: "Release 1 of version 1",
            progress: 10,
            tasks: [{
                id: "Rf5Tu",
                startDate: "2020-09-12",
                endDate: "2020-09-13",
                description: "Task 1 of release 1",
                progress: 10
            },{
                id: "Ht66u",
                startDate: "2020-09-22",
                endDate: "2020-09-23",
                description: "Task 2 of release 1",
                progress: 10
            }]
        },
        {
            versionName: "Version22",
            startDate: "2020-09-01",
            releaseDate: "2020-09-02",
            description: "Release 2 of version 2",
            progress: 10,
            tasks: [{
                id: "Rf5TK",
                startDate: "2020-09-12",
                endDate: "2020-09-13",
                description: "Task 1 of release 2",
                progress: 100
            },{
                id: "Ht66K",
                startDate: "2020-09-22",
                endDate: "2020-09-23",
                description: "Task 2 of release 2",
                progress: 100
            }]
        }
    ])

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
