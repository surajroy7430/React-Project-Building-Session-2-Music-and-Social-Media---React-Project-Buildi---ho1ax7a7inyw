const PROJECT_ID = "ho1ax7a7inyw";

export const getHeaderWithProjectId = () => {
    return {
        headers: { 
            projectId: PROJECT_ID 
        },
    };
};

export const getHeaderWithProjectIDAndBody = () => {
    return {
        headers: { 
            projectId: PROJECT_ID, 
            "Content-Type": "application/json" 
        },
    };
};

export const getAuthHeaderConfig = (token) => {
    return {
        headers: {
            projectID: PROJECT_ID,
            Authorization: `Bearer ${token}`,
        },
    };
};