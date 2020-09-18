import React, { useEffect, useRef, useState } from 'react';
import "./ReleaseComponent.css";
import { GrDrag } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import Modal from 'react-modal';
import EditReleaseForm from '../EditReleaseForm/EditReleaseForm';
import EditTaskForm from '../EditTaskForm/EditTaskForm';
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm';

export default function ReleaseComponent(props) {
    const [showReleaseTasks, setShowReleaseTasks] = useState(false);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    const [showActionMenu, setShowActionMenu] = useState(false);
    const [showReleaseEditModal, setShowReleaseEditModal] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref, () => setShowActionMenu(false));

    const deleteRelease = () => {
        setShowActionMenu(false);
        let updatedReleasesList = props.releases.filter(data => data.versionName !== props.release.versionName)
        props.setReleases(updatedReleasesList)
    }

    const onReleaseDragStart = (e, data) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(data))
    }

    const onReleaseDragOver = (e) => {
        e.preventDefault();
    }

    const onReleaseDrop = (e, msg) => {
        let draggedData = JSON.parse(e.dataTransfer.getData("text"));
        let dropDataVersionName = e.currentTarget.children[1].innerText;
        let dropDataDescription = e.currentTarget.children[6].innerText;

        if (msg === "dropped") {
            let updatedReleasesData = props.releases;

            let draggedDataIndex = updatedReleasesData.findIndex((element) => element.versionName === draggedData.versionName && element.description === draggedData.description)
            let dropDataIndex = updatedReleasesData.findIndex((element) => element.versionName === dropDataVersionName && element.description === dropDataDescription)

            updatedReleasesData.splice(draggedDataIndex, 1)
            // console.log(updatedReleasesData)
            updatedReleasesData.splice(dropDataIndex, 0, draggedData)
            // console.log(updatedReleasesData)
            props.setReleases([...updatedReleasesData])
            // console.log(props.releases)
        }
    }

    return (
        <React.Fragment>
            <tr
                key={props.release.versionName}
                style={{ cursor: "pointer" }}
                onDragStart={(e) => onReleaseDragStart(e, props.release)}
                draggable={true}
                onDragOver={(e) => onReleaseDragOver(e)}
                onDrop={(e) => onReleaseDrop(e, "dropped")}
            >
                <td><span className="moveIcon"><GrDrag /></span> </td>
                <td onClick={() => setShowReleaseTasks(!showReleaseTasks)}>{props.release.versionName}</td>
                <td>
                    <span style={props.release.progress === 0 ? { backgroundColor: "rgb(203,230,250)", fontSize: '15px', fontWeight: 'bold', color: 'rgb(58,79,102)' }
                        : (props.release.progress > 0 && props.release.progress < 100) ?
                            { backgroundColor: "rgb(252,245,209)", color: "rgb(100,102,102)", fontSize: '15px', fontWeight: 'bold' }
                            : { backgroundColor: "rgb(232,250,242)", fontSize: '15px', fontWeight: 'bold', color: 'rgb(116,160,140)' }}>
                        {
                            props.release.progress === 0 ? "INPROGRESS"
                                : (props.release.progress > 0 && props.release.progress < 100) ?
                                    "UNRELEASED" : "RELEASED"
                        }
                    </span>
                </td>
                <td><progress value={props.release.progress} max={100} min={0}> </progress></td>
                <td>{props.release.startDate}</td>
                <td>{props.release.releaseDate}</td>
                <td>{props.release.description}</td>
                <td>u
                    <span className="actionsMenu"
                        onClick={() => setShowActionMenu(!showActionMenu)}
                        ref={ref}
                    ><BsThreeDots />
                    </span>
                    {
                        showActionMenu ?
                            <div className="actionMenu" ref={ref}>
                                <div className="eachTaskMenu" onClick={() => {
                                    setShowActionMenu(false)
                                    setShowReleaseEditModal(true)
                                }}>Edit</div>
                                <div className="eachTaskMenu" onClick={deleteRelease}>Delete</div>
                                <div className="eachTaskMenu" onClick={() => {
                                    setShowActionMenu(false)
                                    setShowCreateTaskModal(!showCreateTaskModal)
                                }}>Create a task</div>
                            </div>
                            : null
                    }
                </td>
            </tr>
            {
                showReleaseTasks ?
                    props.release &&
                        props.release.tasks &&
                        props.release.tasks.length > 0 ?
                        props.release.tasks.map((task, taskIndex) => {
                            return <React.Fragment>
                                <tr>
                                    <td></td>
                                    <td>Task {taskIndex + 1}</td>
                                    <td><span style={task.progress === 0 ? { backgroundColor: "rgb(203,230,250)", fontSize: '15px', fontWeight: 'bold', color: 'rgb(58,79,102)' }
                                        : (task.progress > 0 && task.progress < 100) ?
                                            { backgroundColor: "rgb(252,245,209)", color: "rgb(100,102,102)", fontSize: '15px', fontWeight: 'bold' }
                                            : { backgroundColor: "rgb(232,250,242)", fontSize: '15px', fontWeight: 'bold', color: 'rgb(116,160,140)' }}>
                                        {
                                            parseInt(task.progress) === 0 ? "TO DO"
                                                : (parseInt(task.progress) > 0 && parseInt(task.progress) < 100) ?
                                                    "IN PROGRESS" : "DONE"
                                        }
                                    </span></td>
                                    <td><progress value={task.progress ? task.progress : 0} max={100} min={0}> </progress></td>
                                    <td>{task.startDate ? task.startDate : ""}</td>
                                    <td>{task.endDate ? task.endDate : ""}</td>
                                    <td>{task.description ? task.description : ""}</td>
                                    <td><button className="addButton" onClick={() => setShowEditTaskModal(!showEditTaskModal)}>Edit</button></td>
                                </tr>
                                {
                                    showEditTaskModal ?
                                        <Modal
                                            isOpen={showEditTaskModal}
                                            onRequestClose={() => setShowEditTaskModal(false)}
                                            style={{
                                                content: {
                                                    top: '50%',
                                                    left: '50%',
                                                    right: 'auto',
                                                    bottom: 'auto',
                                                    marginRight: '-50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '95vw'
                                                }
                                            }}
                                        >
                                            <EditTaskForm
                                                currentRelease={props.release}
                                                releases={props.releases}
                                                setReleases={props.setReleases}
                                                taskIndex={taskIndex}
                                                index={props.index}
                                                currentTask={task}
                                                setShowEditTaskModal={() => setShowEditTaskModal(false)}
                                            />

                                        </Modal>
                                        : null
                                }

                            </React.Fragment>
                        }) : props.release && props.release.tasks && props.release.tasks.length === 0 ? <tr><td colSpan="8">No tasks available</td></tr> : null
                    : null
            }

            {
                showReleaseEditModal ?
                    <Modal
                        isOpen={showReleaseEditModal}
                        onRequestClose={() => setShowReleaseEditModal(false)}
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                width: '95vw'
                            }
                        }}
                    >
                        <EditReleaseForm
                            setReleases={props.setReleases}
                            releases={props.releases}
                            index={props.index}
                            currentRelease={props.release}
                            setShowReleaseEditModal={() => setShowReleaseEditModal(false)}
                        />

                    </Modal>
                    : null
            }

            {
                showCreateTaskModal ?
                    <Modal
                        isOpen={showCreateTaskModal}
                        onRequestClose={() => setShowCreateTaskModal(false)}
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                width: '95vw'
                            }
                        }}
                    >
                        <CreateTaskForm
                            setShowReleaseTasks={setShowReleaseTasks}
                            setReleases={props.setReleases}
                            releases={props.releases}
                            index={props.index}
                            currentRelease={props.release}
                            setShowCreateTaskModal={() => setShowCreateTaskModal(false)}
                        />

                    </Modal>
                    : null
            }
        </React.Fragment >
    )
}


function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
            };
        }
        , [ref, handler]
    )
}
