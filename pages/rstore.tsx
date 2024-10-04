import React from "react";
import {Header} from "../components/Header/Header"
import { Layout } from "../components/Layout/Layout"
import { Content } from "../components/Content"
import { Authorization } from "../components/Authorization"
import { Products } from "../components/Products";

export default function RStore () {
    return (
        <Layout>
            <Header open={true}/>
            <Content>
                <Products />
            </Content>
        </Layout>      
    )
}