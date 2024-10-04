import React from "react"
import {Header} from "../components/Header/Header"
import { Layout } from "../components/Layout/Layout"
import { Content } from "../components/Content"
import { Authorization } from "../components/Authorization"

export default function Page() {
    return (
        <Layout>
            <Header open={false}/>
            <Content>
                <Authorization />
            </Content>
        </Layout>        
    )
}