//$(function() {
    //console.log('xxx');
    //window.modalLoader.showLoader();
    
    //$('.more-btn-container').hide();
    
    //var URL = $('#getImagesList').attr('href');
    //var page = parseInt($('.grid-list').attr('data-view') + 1);
    
    /*
    $.ajax({
        type: 'GET',
        url: URL,
        dataType: 'json',
        data: {'page': page},
        success: function(data) {
            if (data.images) {
                renderList(data, $('.grid-list'));
                $('.grid-list').attr('data-view', page);
            } else {
                $('.grid').html(notice);
            }
            window.modalLoader.hideLoader();
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            window.baseView.pinesNotify(noticeErrorTitle, errorThrown, 'error');
            window.modalLoader.hideLoader();
        }
    });
    */
   
   /*
    $('.more-btn-container a.btn').click(function() {
        window.modalLoader.showLoader();
        var page = parseInt($('.grid-list').attr('data-view')) + 1;

        $.ajax({
            type: 'GET',
            url: URL,
            dataType: 'json',
            data: {'page': page},
            success: function(data) {
                renderList(data, $('.grid-list'));
                window.modalLoader.hideLoader();
                $('.grid-list').attr('data-view', page);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                window.baseView.pinesNotify(noticeErrorTitle, errorThrown, 'error');
                window.modalLoader.hideLoader();                
            }
        });
        return false;
    });
*/
    /*
    $('body').on('click', '.modal-trigger', function() {
        
        regenerateForm($(this).parents('li').find('.image-id').attr('rel'));
        
        $('#modalQuickEdit').modal();
        //window.modalLoader.showModalContentLoader();
        return false;
    });
    */
   
   /*
    $('body').on('click', '.save-trigger', function() {
        saveChanges($(this));
    });
    */
   
    /*
    $('body').on('click', '.remove-image', function() {
        return false;
    });
    */
   
   /*
    $('body').on('mousedown', '.remove-image', function() {
        var placement = ($(this).data('placement') !== 'undefined') ? $(this).data('placement') : 'left';
        var url = $(this).attr('href');

        $(this).popover({
            content: 
                    '<div class="delete-popvoer">' + Translator.get('global.deleteConfirm') + '<br />' + 
                    '<a data-path="' + url + '" href="" class="btn btn-primary btn-mini remove-image-confirm">' + Translator.get('global.confirm') + '</a>&nbsp;&nbsp;&nbsp;<a class="btn btn-inverse btn-mini dismiss">' + Translator.get('global.dissmiss') + '</a></div>',
            placement: placement,
            html: true           
        });
    });
*/
/*
    $('body').on('click', '.dismiss', function() {
        $(this).parents('div.popover').prev('a.remove-image').popover('hide');
    });
*/
/*
    $('body').on('click', '.remove-image-confirm', function() {
        $(this).parents('div.popover').prev('a.remove-image').popover('hide');
        $(this).parents('li').fadeOut(500);
        window.setTimeout(function() {
            $(this).parents('li').remove();
        }, 500);
        
        window.modalLoader.loader('show');
        
        var URL = $(this).data('path');

        $.ajax({
            type: 'POST',
            url: URL,
            dataType: 'json',
            data: null,
            success: function(data) {
                if(data.result === 'success') {
                    window.baseView.pinesNotify(null, noticeSuccessDeleteText, 'success');
                    window.modalLoader.hideLoader();
                } else if(data.result === 'error') {
                    window.baseView.pinesNotify(noticeErrorTitle, noticeErrorText, 'error');
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                window.baseView.pinesNotify(noticeErrorTitle, errorThrown, 'error');
                window.modalLoader.hideLoader();
            }
        });

        return false;
    });
});
*/

/*
function renderList(data, container) {
    var list = '';
    var dir = $('#dirPath').attr('href');
    var editPath = $('#editPath').attr('href');
    $.each(data.images, function(i, obj){
        list = list + '<li>' + window.fileExtension.renderMimeTypeThumbnail(obj, dir) +
            '<div class="image-grid-btns">' + 
                '<a class="hide image-id" rel="' + obj.id + '"></a>' +
                '<div class="edit-form-prototype hide"></div>' +
                '<a data-placement="top" data-toggle="popover" title="' + Translator.get('global.delete') + '" class="remove-image"  href="' + obj.deletePath + '"><i class="icon-trash"></i></a>' +
                '<a data-placement="top" data-toggle="tooltip" title="' + Translator.get('global.copySource') + '" href="' + dir + obj.path + '" class="copy-source"><i class="icon-screenshot"></i></a>' +
                '<a data-placement="top" data-toggle="tooltip" title="' + Translator.get('asset.quickEdit') + '" class="modal-trigger"   href="' + editPath + '/' + obj.id + '"><i class="icon-pencil"></i></a>' +
                '<a data-placement="top" data-toggle="tooltip" title="' + Translator.get('global.edit') + '" href="' + editPath + '/' + obj.id + '"><i class="icon-edit"></i></a>' +
            '</div></li>';
    });
    container.append(list);
    
    if (data.hasMore) {
        $('.more-btn-container').show();
    } else {
        $('.more-btn-container').hide();
    }
}
*/

/*
function saveChanges(el) {
    //window.modalLoader.showLoader();
    
    var form = el.parents('#modalQuickEdit').find($('form.inline-edit-form'));
    var data = {
        'asset_form[id]'            : form.find($('input[name="asset_form[id]"]')).val(),
        'asset_form[title]'         : form.find($('input[name="asset_form[title]"]')).val(),
        'asset_form[priority]'      : form.find($('input[name="asset_form[priority]"]')).val(),
        'asset_form[redirect]'      : form.find($('input[name="asset_form[redirect]"]')).val(),
        'asset_form[slug]'          : form.find($('input[name="asset_form[slug]"]')).val()
    };

    var URL = $('#editInlinePath').attr('href');

    $.ajax({
        type: 'POST',
        url: URL,
        dataType: 'json',
        data: data,
        success: function(data) {
            if(data.result === 'success') {
                window.baseView.pinesNotify(null, noticeSuccessText, 'success');
                //window.modalLoader.hideLoader();
                $('#modalQuickEdit').modal('hide');
            } else if(data.result === 'error') {
                //window.modalLoader.hideLoader();
                window.baseView.pinesNotify(noticeErrorValidationTitle, noticeErrorText, 'error');
                $.each(data.errors, function(key, error) {
                    $.each(error, function(i, message) {
                    window.baseView.pinesNotify(noticeErrorTitle, message, 'error');
                    });
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            window.baseView.pinesNotify(noticeErrorTitle, errorThrown, 'error');
            $('#modalQuickEdit').modal('hide');
            //window.modalLoader.hideLoader();
        }
    });
    
    return false;
}
*/

/*
function regenerateForm(assetId) {
    window.modalLoader.showLoader(true);
    var URL = $('#editInlineRegeneratePath').attr('href');
    $.ajax({
        type: 'GET',
        url: URL,
        dataType: 'json',
        data: {'id': assetId},
        success: function(data) {
            $('.modal-body').html(data.editFormPrototype);
            //window.modalLoader.hideLoader();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            window.baseView.pinesNotify(noticeErrorTitle, errorThrown, 'error');
            $('#modalQuickEdit').modal('hide');
            //window.modalLoader.hideLoader();
        }
    });
    //window.modalLoader.hideLoader();
}
*/

/*
var notice = '<div class="alert">' +
    '<button type="button" class="close" data-dismiss="alert">&times;</button>' + 
    Translator.get('global.emptyDatabase') +
    '</div>';
*/
  
//var noticeSuccessTitle = 'Success!';
//var noticeSuccessText = Translator.get('crud.asset.updateSuccess');

//var noticeErrorTitle = Translator.get('global.errorOccured');
//var noticeErrorValidationTitle = Translator.get('validation.error');;
//var noticeErrorText = Translator.get('crud.asset.updateFailure');

//var noticeSuccessDeleteText = 'Delete success!';
//var noticeSuccessDeleteText = Translator.get('crud.asset.deleteSuccess');
//});