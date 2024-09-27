import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admission Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {/* Full Name */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            {...register('fullName', { required: 'Full Name is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.fullName && <p style={{ color: 'red', fontSize: '12px' }}>{errors.fullName.message}</p>}
        </div>

        {/* Father Name */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Father Name</label>
          <input
            type="text"
            placeholder="Father Name"
            {...register('fatherName', { required: 'Father Name is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.fatherName && <p style={{ color: 'red', fontSize: '12px' }}>{errors.fatherName.message}</p>}
        </div>

        {/* Email */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            {...register('phone', { required: 'Phone number is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.phone && <p style={{ color: 'red', fontSize: '12px' }}>{errors.phone.message}</p>}
        </div>

        {/* CNIC */}
        <div style={{ flex: '1 1 45%' }}>
          <label>National ID (CNIC)</label>
          <input
            type="text"
            placeholder="CNIC"
            {...register('cnic', { required: 'CNIC is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.cnic && <p style={{ color: 'red', fontSize: '12px' }}>{errors.cnic.message}</p>}
        </div>

        {/* Date of Birth */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Date of Birth</label>
          <input
            type="date"
            {...register('dob', { required: 'Date of Birth is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.dob && <p style={{ color: 'red', fontSize: '12px' }}>{errors.dob.message}</p>}
        </div>

        {/* Gender */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Gender</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p style={{ color: 'red', fontSize: '12px' }}>{errors.gender.message}</p>}
        </div>

        {/* Laptop Availability */}
        <div style={{ flex: '1 1 45%' }}>
          <label>Do you have a Laptop?</label>
          <select
            {...register('laptop', { required: 'This field is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.laptop && <p style={{ color: 'red', fontSize: '12px' }}>{errors.laptop.message}</p>}
        </div>

        {/* Address */}
        <div style={{ flex: '1 1 100%' }}>
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            {...register('address', { required: 'Address is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.address && <p style={{ color: 'red', fontSize: '12px' }}>{errors.address.message}</p>}
        </div>

        {/* Last Qualification */}
        <div style={{ flex: '1 1 100%' }}>
          <label>Last Qualification</label>
          <input
            type="text"
            placeholder="Qualification"
            {...register('qualification', { required: 'Qualification is required' })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.qualification && <p style={{ color: 'red', fontSize: '12px' }}>{errors.qualification.message}</p>}
        </div>

        {/* Profile Image */}
        <div style={{ flex: '1 1 100%' }}>
          <label>Profile Image</label>
          <input
            type="file"
            {...register('profileImage')}
            style={{ display: 'block', margin: '10px 0' }}
          />
          <p style={{ fontSize: '12px', color: '#555' }}>
            <ul>
              <li>With white or blue background</li>
              <li>File type: jpg, jpeg, png</li>
              <li>Upload your recent passport size picture</li>
              <li>Your face should be clearly visible without any glasses</li>
            </ul>
          </p>
        </div>

        {/* Submit Button */}
        <div style={{ flex: '1 1 100%' }}>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#4A00E0',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;