import {AxiosClient} from './AxiosClient';


export const getCallList = async () => {
    try {
        const response = await AxiosClient.get('getCallList');
        return response.data;
    } catch (error) {
        return {status: -1, message: 'Some thing went wrong...'};
    }
};

export const getCall = async () => {
    try {
        const response = await AxiosClient.get('getCall');
        return response.data;
    } catch (error) {
        return {status: -1, message: 'Some thing went wrong...'};
    }
};

export const getCallPathParam = async (id, name, age) => {
    try {
        const response = await AxiosClient.get(`getCallPathParam/${id}/${name}/${age}`);
        return response.data;
    } catch (error) {
        return {status: -1, message: 'Some thing went wrong...'};
    }
};

export const getCallQueryParam = async (id, name, age) => {
    try {
        const response = await AxiosClient.get('getCallQueryParam', {
            params: {
                id: id,
                name: name,
                age: age,
            },
        });
        return response.data;
    } catch (error) {
        return {status: -1, message: 'Some thing went wrong...'};
    }
};

export const postCallFormData = async (id, name, age) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('age', age);
    try {
        const response = await AxiosClient.post('postCallFormData', formData);
        return response.data;
    } catch (error) {
        return {status: -1, message: 'Some thing went wrong...'};
    }
};

export const postCallBody = async (id, name, age) => {
    try {
        const response = await AxiosClient.post('postCallBody', {
            id: id,
            name: name,
            age: age,
        });
        return response.data;
    } catch (error) {
        return {status: -1, message: 'Some thing went wrong...'};
    }
};
