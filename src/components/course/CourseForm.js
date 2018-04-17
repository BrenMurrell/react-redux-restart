import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, deleting, errors, onDelete }) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput 
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange} error={errors.authorId} />
            <TextInput 
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />
            <TextInput 
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} />
                <button
                    disabled={deleting}
                    className="btn btn-danger"
                    onClick={onDelete}>{deleting ? 'Deleting' : 'Delete'}</button>
                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave} />
        </form>
    );
};
CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    deleting: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;