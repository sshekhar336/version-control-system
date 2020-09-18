import React, { useState } from 'react';
import "./CreateReleaseForm.css";

export default function CreateReleaseForm(props) {
    const [versionName, setVersionName] = useState('')
    const [versionNameError, setVersionNameError] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [startDateError, setStartDateError] = useState(false)
    const [releaseDate, setReleaseDate] = useState('')
    const [releaseDateError, setReleaseDateError] = useState(false)
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState(false)

    const addRelease = (e) => {
        e.preventDefault();

        if (versionName.length !== 0 && startDate.length !== 0 && releaseDate.length !== 0 && description.length !== 0 && Date.parse(startDate) <= Date.parse(releaseDate)) {
            console.log("asdfgjhgsahj")
            props.setReleases([...props.releases, {
                versionName,
                startDate,
                releaseDate,
                description,
                progress: 0,
                tasks: []
            }]);

            setVersionName("");
            setStartDate("");
            setReleaseDate("");
            setDescription("");
        }
        else {
            if (versionName.length === 0) {
                setVersionNameError(true)
            }

            if (startDate.length === 0) {
                setStartDateError(true)
            }

            if (startDate.length !== 0 && releaseDate.length !== 0) {
                if (Date.parse(startDate) > Date.parse(releaseDate)) {
                    setStartDate("");
                    setReleaseDate("");
                    alert("Start date cannot be greater than release date.")
                }
            }

            if (releaseDate.length === 0) {
                setReleaseDateError(true)
            }

            if (description.length === 0) {
                setDescriptionError(true)
            }
        }
    }

    function _onFocus(e) {
        e.currentTarget.type = "date";
    }

    function _onBlur(e) {
        e.currentTarget.type = "text";
    }

    return (
        <form onSubmit={addRelease} className="addReleaseForm">
            <div style={{ width: '38%' }}>
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
            <div>
                <input
                    type="text"
                    placeholder="Start date"
                    className="startDate"
                    id="startDateId"
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
                    id="releaseDateId"
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
            <button type="submit" className="addButton"> Add </button>
        </form>
    )
}
