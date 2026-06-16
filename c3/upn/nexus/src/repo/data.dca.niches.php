<?php
class DCANicheModule {
 function query_add_newCategory($catId,$enCatName,$hiCatName,$enCatDesc,$hiCatDesc,$isActive){
   $sql="INSERT INTO dca_categories_list(cat_id, en_cat_name, hi_cat_name, en_cat_desc, hi_cat_desc, is_active) ";
   $sql.="VALUES ('".$catId."','".$enCatName."','".$hiCatName."','".$enCatDesc."','".$hiCatDesc."','".$isActive."';";
   return $sql;
 }
 function query_view_categoriesList(){
    return "SELECT * FROM dca_categories_list;";
 }
 function query_update_category($catId,$enCatName,$hiCatName,$enCatDesc,$hiCatDesc,$isActive){
    $sql="UPDATE dca_categories_list SET ";
    if(strlen($enCatName)>0){ $sql.=" en_cat_name='".$enCatName."',"; }
    if(strlen($hiCatName)>0){ $sql.=" hi_cat_name='".$hiCatName."',"; }
    if(strlen($enCatDesc)>0){ $sql.=" en_cat_desc='".$enCatDesc."',"; }
    if(strlen($hiCatDesc)>0){ $sql.=" hi_cat_desc='".$hiCatDesc."',"; }
    if(strlen($isActive)>0){ $sql.=" is_active='".$isActive."',"; }
    $sql=chop($sql,",")." WHERE cat_id=".$catId.";";
    return $sql;
 }
}

$dcaNicheModule = new DCANicheModule();
?>