import React from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

function ViewModel({selectedCategory}:any) {
  return (
    <DialogContent>
    <DialogHeader>
      <DialogTitle>Category Details</DialogTitle>
      <DialogDescription>
        {selectedCategory && (
          <div>
            <p><strong>ID:</strong> {selectedCategory._id}</p>
            <p><strong>Name:</strong> {selectedCategory.name}</p>
            <p><strong>Description:</strong> {selectedCategory.description}</p>
            <p><strong>Created At:</strong> {new Date(selectedCategory.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(selectedCategory.updatedAt).toLocaleString()}</p>
          </div>
        )}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  )
}

export default ViewModel
