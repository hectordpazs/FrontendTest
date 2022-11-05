import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import { startAddMovie, startUploading } from '../store/actions/movies';

export const MovieForm = () => {

    let [formValues, handleFormValues] = useForm({
        title: '',
        overview: '',
        date: '',
        url: null
    })

    let {title, overview, date} = formValues

    const dispatch = useDispatch()
    
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(isFormValid()){
            if(formValues.url){
                dispatch(startUploading(formValues))
            }else{
                dispatch(startAddMovie(formValues))
            }
        }
    }

    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if (file){
            formValues = {...formValues, url: file}
        }
    }

    const isFormValid = ()=>{
        if(title.trim().length===0 || overview.trim().length===0 || date.trim().length===0){
            Swal.fire('Error', 'the title/overview/date is empty','error');
            return false;
        }
        return true;
    }

  return (
    <form onSubmit={handleFormSubmit} className={'w-50 container p-5'}>
        <div className="form-group">
            <input 
                type="text"
                className="form-control"
                placeholder="title"
                name="title"
                onChange={handleFormValues}
                
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="overview"
                name="overview"
                onChange={handleFormValues}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="date"
                name="date"
                onChange={handleFormValues}
            />
        </div>
        <input 
            id='fileSelector'
            type="file"
            name='file'
            className="form-control"
            onChange={handleFileChange}
        />
        <div className="form-group">
            <input 
                type="submit"
                className="btn btn-primary"
                value="Add Movie" 
            />
        </div>
    </form>
  )
}
