
import React, { useEffect } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { Button, Card, CardBody, Input, Label, Modal, ModalHeader } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../Ui/LoadingButton';
import { useCommonModelState } from '../../lib/state mangment/driver&customer/ModelState';
import { CiLock } from "react-icons/ci";

interface UnBlockModalProps {

  Mutation:any,
  type :'customer' |'driver'
}

const UnBlockModal: React.FC<UnBlockModalProps> = ({Mutation ,type  }) => {
  const {t} = useTranslation();

  const key_to_api = type == 'customer' ? 'customer_id' :"driver_id"

  const  {isOpenUnBlock:isOpen , objectID , setIsopenUnBlock:setIsopen} = useCommonModelState()

  const handleSubmit = () => {
    Mutation.mutate({ [key_to_api]: objectID });
  };

  useEffect(() => {
    if (Mutation.isSuccess) {
      setIsopen();
    }
  }, [Mutation.isSuccess, setIsopen]);

  return (
    <Modal isOpen={isOpen} centered size='md'>
      <ModalHeader toggle={() => setIsopen()}>
        {t('un_'+type+'_block_page')}
      </ModalHeader>
      <Card>
        <CardBody>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontWeight: 'bold' }}> {t('un_blocking_'+type)}</h1>
            <CiLock style={{ fontSize: '100px', color: 'black', margin: '20px 0' }} />
            <div className=''>
              <div style={{ marginTop: 20 }}>
                <Button color='danger' style={{ marginInline: 10 }} onClick={() => setIsopen()}>
                  {t('cancel')}
                </Button>
                <LoadingButton color='primary' onClick={handleSubmit} type='submit' isLoading={Mutation.isLoading}>
                  {t('un_block_for_'+type)}
                </LoadingButton>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default UnBlockModal;
