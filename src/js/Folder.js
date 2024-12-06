import React, { useState, useEffect } from 'react';
import { Folder2 } from 'react-bootstrap-icons';
import useFetchData from './UseFetchData';

export default function Folder() {
    const folders = useFetchData('folders');
    
    return (
        <>
            <div className="d-inline-flex flex-column align-items-center mx-5">
                {folders.map((folder) => (
                    <React.Fragment key={folder.id}>
                        <Folder2 className='icon' />
                        <span>{folder.title}</span>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}