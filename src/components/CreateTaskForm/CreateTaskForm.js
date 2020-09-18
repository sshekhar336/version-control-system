import React, { useState } from 'react';

export default function CreateTaskForm(props) {
    const [startDate, setStartDate] = useState('')
    const [startDateError, setStartDateError] = useState(false)
    const [endDate, setEndDate] = useState('')
    const [releaseDateError, setReleaseDateError] = useState(false)
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState(false)
    const [progress, setProgress] = useState(0)
    const [progressError, setProgressError] = useState(false)

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }

    const editTask = (e) => {
        e.preventDefault();
        if (startDate.length !== 0 && endDate.length !== 0 && description.length !== 0 && Date.parse(startDate) <= Date.parse(endDate)) {

            let newTask = {
                id: makeid(),
                startDate,
                endDate,
                description,
                progress
            }

            // props.releases[props.index].tasks.push(newTask)
            props.releases[props.index].tasks = [...props.releases[props.index].tasks, newTask]

            props.setReleases([...props.releases]);

            setStartDate("");
            setEndDate("");
            setDescription("");
            setProgress("");
            props.setShowCreateTaskModal(false);
            props.setShowReleaseTasks(true);
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
                    setStartDate("");
                    setEndDate("");
                    alert("Start date cannot be greater than end date.")
                }
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


