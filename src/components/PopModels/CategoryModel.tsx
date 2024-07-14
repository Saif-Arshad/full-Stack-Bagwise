// "use client"

// import React from 'react'
// import { useFormik } from "formik";
// import { useCategory } from '@/customHooks/useCategory';
// import { categorySchema } from '@/validations/YUP';
// function CategoryModel() {
//   const {doAddCategory} = useCategory()
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       description: "",
//     },
//     validationSchema: categorySchema,
//     onSubmit: doAddCategory,
//   });

//   return (
//     <ModalContent>
//     {(onClose) => (
//       <>
//         <ModalHeader className="flex flex-col gap-1">Create new category</ModalHeader>
//         <ModalBody>
//         <form onSubmit={formik.handleSubmit}>
//         <div className='flex flex-col'>
//           <input
//             type='text'
//             name='name'
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             placeholder='Category Name'
//             className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-500 dark:border-black'
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="text-red-600 text-sm">
//               {formik.errors.name}
//             </div>
//           ) : null}
//         </div>
//         <div className='flex flex-col'>
//           <textarea
//             name='description'
//             onBlur={formik.handleBlur}
//             value={formik.values.description}
//             onChange={formik.handleChange}
//             rows={5}
//             placeholder='Category description'
//             className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-500 dark:border-black'
//           />
//           {formik.touched.description && formik.errors.description ? (
//             <div className="text-red-600 text-sm">
//               {formik.errors.description}
//             </div>
//           ) : null}
//         </div>
//         <ModalFooter>
//           <Button color="danger" variant="light" onPress={onClose}>
//             Close
//           </Button>
//           <Button color="primary" type='submit' onPress={onClose}>
//             save
//         </form>
//       </>
//     )}
//   </ModalContent>
//   )
// }

// export default CategoryModel
