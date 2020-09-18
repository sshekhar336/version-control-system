import React, { useEffect, useState } from 'react';

export default function EditTaskForm(props) {
    const [startDate, setStartDate] = useState('')
    const [startDateError, setStartDateError] = useState(false)
    const [endDate, setEndDate] = useState('')
    const [releaseDateError, setReleaseDateError] = useState(false)
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState(false)
    const [progress, setProgress] = useState(0)
    const [progressError, setProgressError] = useState(false)

    const editTask = (e) => {
        e.preventDefault();
        if (startDate.length !== 0 && endDate.length !== 0 && description.length !== 0 && Date.parse(startDate) <= Date.parse(endDate)) {

            let updatedTask = {
                id: props.currentTask,
                startDate,
                endDate,
                description,
                progress
            }

            props.releases[props.index].tasks[props.taskIndex] = updatedTask

            props.setReleases([...props.releases]);

            setStartDate("");
            setEndDate("");
            setDescription("");
            setProgress("");
            props.setShowEditTaskModal(false);
        }
        else {
            
            if (startDate.length === 0) {
                setStartDateError(true)
            }
            if (endDate.length === 0) {
                setReleaseDateError(true)
            }
            if (description.length === 0) {
                setDescriptionError(true)
            }
            if (startDate.length !== 0 && endDate.length !== 0) {
                if (Date.parse(startDate) > Date.parse(endDate)) {
                    alert("Start date cannot be greater than end date.")
                }
            }
        }
    }

    useEffect(() => {
        setStartDate(props.currentTask.startDate);
        setEndDate(props.currentTask.endDate);
        setDescription(props.currentTask.description);
        setProgress(props.currentTask.progress);
    }, [props.currentTask.startDate, props.currentTask.endDate, props.currentTask.description, props.currentTask.progress])

    function _onFocus(e) {
        e.currentTarget.type = "date";
    }

    function _onBlur(e) {
        e.currentTarget.type = "text";
    }

    return (
        <form onSubmit={editTask} className="addReleaseForm">
            <div style={{ marginRight: '5px', width: '20%'}}>
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
                    placeholder="End date"
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e.target.value)
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
