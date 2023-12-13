import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsExclamationCircle } from 'react-icons/bs';
import { Button, Card, CardBody, Col, Input, Label, Modal, ModalHeader, Row } from 'reactstrap';
import { useCommonModelState } from '../../lib/state mangment/driver&customer/ModelState';
import { LoadingButton } from '../Ui/LoadingButton';


interface GiftModalProps {
    Mutation:any,
    type :'customer' |'driver'
}

const GiftModal: React.FC<GiftModalProps> = ({Mutation ,type }) => {
    const {t} = useTranslation();
  
    const  {isOpenGift:isOpen , objectID , setIsopenGift:setIsOpen} = useCommonModelState()

  useEffect(() => {
    if (Mutation.isSuccess) {
      setIsOpen();
    }
  }, [Mutation.isSuccess, setIsOpen]);

  const handleGift = () => {
    const enterCodesInput = document.getElementById('enter_codes') as HTMLInputElement;
    if (enterCodesInput && enterCodesInput.value) {
        Mutation.mutate({ type, id: objectID, value: enterCodesInput.value });
    }
  };

  return (
    <Modal isOpen={isOpen} centered size='md'>
      <ModalHeader toggle={() => setIsOpen()}>
        {t(type+'_gift_page')}
      </ModalHeader>
      <Card>
        <CardBody>
          <Row>
            <Col className='' style={{ width: 300 }}>
              <Label for='enter_codes' className='modal_info'>{t('value')}</Label>
              <Input id='enter_codes' placeholder={t('value')} type='number' />
              <Col style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                <Button color='danger' onClick={() => setIsOpen()}>
                  {t('cancel')}
                </Button>
                <LoadingButton
                  color='primary'
                  onClick={handleGift}
                  type='submit'
                  isLoading={Mutation.isLoading}>
                  {t('give')}
                </LoadingButton>
              </Col>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default GiftModal;
