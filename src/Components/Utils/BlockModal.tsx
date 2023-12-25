
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsExclamationCircle } from 'react-icons/bs';
import { Button, Card, CardBody, Input, Label, Modal, ModalHeader } from 'reactstrap';
import { useCommonModelState } from '../../lib/state mangment/driver&customer/ModelState';
import { LoadingButton } from '../Ui/LoadingButton';

interface BlockModelProps {
    Mutation:any,
    type :'customer' |'driver'
}

const BlockModel: React.FC<BlockModelProps> = ({Mutation ,type}) => {
  const {t} = useTranslation();
  const key_to_api = type == t('customer') ? t('customer_id') : t("driver_id")

  const  {isOpenBlock:isOpen , objectID , setIsopenBlock:setIsOpen} = useCommonModelState()

  const handleSubmit = () => {
    const blockInput = document.getElementById('block_input') as HTMLInputElement;
    if (blockInput) {
        Mutation.mutate({ [key_to_api]: objectID, block_timer: blockInput.value });
    }
  };

  useEffect(() => {
    if (Mutation.isSuccess) {
      setIsOpen();
    }
  }, [Mutation.isSuccess, setIsOpen]);

  return (
    <Modal isOpen={isOpen} centered size='md'>
      <ModalHeader toggle={() => setIsOpen()}>
      {t("al")}{type}{t('_block_page')}
      </ModalHeader>
      <Card>
        <CardBody>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1 className='modal_info' style={{ fontWeight: 'bold' }}> {t('blocking_')}{type}</h1>
            <BsExclamationCircle className='modal_info' style={{ fontSize: '100px', color: '#f8be86', margin: '20px 0' }} />
            <div className=''>
              <Label for='block_input'>{t('date_blocking')}</Label>
              <Input id='block_input' placeholder={t('date_blocking')} type='date' />
              <div style={{ marginTop: 20 }}>
                <Button color='danger' style={{ marginInline: 10 }} onClick={() => setIsOpen()}>
                  {t('cancel')}
                </Button>
                <LoadingButton color='primary' onClick={handleSubmit} isLoading={Mutation.isLoading} type='submit'>
                  {t('add_block_for_')}{type}
                </LoadingButton>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default BlockModel;
