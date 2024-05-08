import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobList } from "../../services/job.service";
import { getJobListType } from "./jobList.type";

export const getJobList = createAsyncThunk(
    getJobListType,
    async (data) => {
        try {
            const response = await jobList(data);
            return response.data;
        } catch (error) {
            // console.error("Error while fetching jobList:", error);
            throw error;
        }
    }
);