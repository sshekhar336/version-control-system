import React, { useEffect, useState } from 'react';
import "./EditReleaseForm.css";

export default function EditReleaseForm(props) {
    const [versionName, setVersionName] = useState('')
    const [versionNameError, setVersionNameError] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [startDateError, setStartDateError] = useState(false)
    const [releaseDate, setReleaseDate] = useState('')
    const [releaseDateError, setReleaseDateError] = useState(false)
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState(false)
    const [progress, setProgress] = useState(0)
    const [progressError, setProgressError] = useState(false)

    const editRelease = (e) => {
        e.preventDefault();
        if (versionName.length !== 0 && startDate.length !== 0 && releaseDate.length !== 0 && description.length !== 0 && Date.parse(startDate) <= Date.parse(releaseDate)) {

            let updatedRelease = {
                versionName,
                startDate,
                releaseDate,
                description,
                progress,
                tasks: props.releases[props.index].tasks
            }

            props.releases[props.index] = updatedRelease

            props.setReleases([...props.releases]);

            setVersionName("");
            setStartDate("");
            setReleaseDate("");
            setDescription("");
            props.setShowReleaseEditModal();
        }
        else {
            if (versionName.length === 0) {
                setVersionNameError(true)
            }
            if (startDate.length === 0) {
                setStartDateError(true)
            }
            if (releaseDate.length === 0) {
                setReleaseDateError(true)
            }
            if (description.length === 0) {
                setDescriptionError(true)
            }
            if (startDate.length !== 0 && releaseDate.length !== 0) {
                if (Date.parse(startDate) > Date.parse(releaseDate)) {
                    alert("Start date cannot be greater than release date.")
                }
            }
        }
    }

    useEffect(() => {
        setVersionName(props.currentRelease.versionName);
        setStartDate(props.currentRelease.startDate);
        setReleaseDate(props.currentRelease.releaseDate);
        setDescription(props.currentRelease.description);
        setProgress(props.currentRelease.progress);
    }, [props.currentRelease.versionName, props.currentRelease.startDate, props.currentRelease.releaseDate, props.currentRelease.description, props.currentRelease.progress ])

    function _onFocus(e) {
        e.currentTarget.type = "date";
    }

    function _onBlur(e) {
        e.currentTarget.type = "text";
    }

    return (
        <form onSubmit={editRelease} className="addReleaseForm">
            <div style={{ width: '25%', marginRight: '5px' }}>
                <input
                    type="text"
                    placeholder="Version name"
                    className="versionName"
                    value={versionName}
                    onChange={(e) => {
                        setVersionName(e.target.value)
                        setVersionNameError(false)
                    }}
                />
                {
                    versionNameError ? <div className="errorMesssage">*Version name is required.</div> : null
                }
            </div>
            <div style={{ marginRight: '5px'}}>
                <input
                    type="number"
                    min={0}
                    max={100}
                    placeholder="Progress"
                    className="versionName"
                    value={progress}
                    onChange={(e) => {
                        setProgress(e.target.value)
                        setProgressError(false)
                    }}
                />
                {
                    progressError ? <div className="errorMesssage">*Progress is required.</div> : null
                }
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Start date"
                    className="startDate"
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value)
                        setStartDateError(false)
                    }}
                />
                {
                    startDateError ? <div className="errorMesssage">*Start date is required.</div> : null
                }
            </div>
            <div>
                <input
                    type="text"
                    className="releaseDate"
                    placeholder="Release date"
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                    value={releaseDate}
                    onChange={(e) => {
                        setReleaseDate(e.target.value)
                        setReleaseDateError(false)
                    }}
                />
                {
                    releaseDateError ? <div className="errorMesssage">*Release date is required.</div> : null
                }
            </div>
            <div style={{ width: '20%' }}>
                <input
                    type="text"
                    placeholder="Description"
                    className="description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                        setDescriptionError(false)
                    }}
                />
                {
                    descriptionError ? <div className="errorMesssage">*Description is required.</div> : null
                }
            </div>
            <button type="submit" className="addButton"> Save </button>
        </form>
    )
}
