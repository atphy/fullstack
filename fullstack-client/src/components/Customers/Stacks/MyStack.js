/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { StackContext } from './StackProvider'
import { ShopRecord } from '../../Shops/ShopRecordList/ShopRecord'
import { Redirect } from "react-router-dom"
import { Loading } from '../../Loading/Loading'

export const MyStack = (props) => {

    const {getMyStackItems, stackItems} = useContext(StackContext)

    useEffect(()=>{
        getMyStackItems()
    }, [])


if (!props.currentUserProfile) {
    return <Loading />
} else {
    if (props.currentUserProfile !== 3) {
        return <Redirect to="/" />
    } else {
        return (
            <>
            <div className="my-stack-container" style={{ margin: "0 0", lineHeight: "1.75rem", }}> 
            <h1>Your Stack</h1>
            <div className="record-list">
            {stackItems.map(stackItem => {
                    return <div>
                    <ShopRecord stackItems={stackItems} stackId={stackItem.id} key={stackItem.record.id} currentUserProfile={props.currentUserProfile} shopRecord={stackItem.record} />
                    </div>
            })}
            </div>
            </div>
        </>
    )
        }
    }
};