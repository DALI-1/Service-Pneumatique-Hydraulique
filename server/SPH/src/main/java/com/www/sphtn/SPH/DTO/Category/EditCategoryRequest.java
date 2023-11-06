package com.www.sphtn.SPH.DTO.Category;

import com.www.sphtn.SPH.DTO.dbFile.dbFileRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EditCategoryRequest {
    private String id;
    private String name;
    private dbFileRequest categoryImg_File;
}
